import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormAddCard from './search';
import Search from './search';
import { apiCharacter } from './api'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

describe('index', () => {
  it('renders App component', () => {
    render (<Search />);
    screen.debug();
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});
describe('events', () => {
it("input focus", () => {
    const { getByTestId } = render(
      <input type="text" data-testid="simple-input" />
    );
    const input = getByTestId("simple-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});

const server = setupServer(
  rest.get('https://the-one-api.dev/v2/book', async (req, res, ctx) => {
    const { books } = await req.json()
    return res(
      ctx.status(200),
      ctx.json({docs:
        [
          { "_id": "5cf5805fb53e011a64671582",
            "name": "The Fellowship Of The Ring"
          },
          { "_id": "5cf58077b53e011a64671583",
            "name": "The Two Towers"
          },
          {
            "_id": "5cf58080b53e011a64671584",
            "name": "The Return Of The King"
          }
        ]
      })
    )
  }),
)
server.listen({
  onUnhandledRequest(req) {
    console.error(
      'Found an unhandled %s request to %s',
      req.method,
      req.url.href,
    )
  },
})


