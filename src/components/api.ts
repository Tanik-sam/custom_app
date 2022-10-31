const baseurl = 'https://the-one-api.dev/v2/';

const headers = {
  Accept: 'application/json',
  Authorization: 'Bearer yLi1w8ZSQAGZLdOwXdgE',
};

export async function apiSearch() {
  try {
    const getBooks = await fetch(`${baseurl}book`, {
      headers: headers,
    });
    const books = await getBooks.json();
    console.log(books);
    return books;
  } catch (e) {
    console.log('error', e);
  }
}

export async function apiBook() {
  try {
    const book = await apiSearch();
    const getChapter = await fetch(`${baseurl}book/${book.docs[0]._id}/chapter`, {
      headers: headers,
    });
    const chapter = await getChapter.json();
    console.log(chapter, book);
  } catch (e) {
    console.log('error', e);
  }
}

export async function apiCharacters(page: number, limit: number, sort?: string) {
  let req = '';
  switch (sort) {
    case 'Sort by name ↑':
      req = 'name:asc';
      break;
    case 'Sort by name ↓':
      req = 'name:desc';
      break;
    case 'Sort by birth ↑':
      req = 'birth:asc';
      break;
    case 'Sort by birth ↓':
      req = 'birth:desc';
      break;
    case 'Sort by race ↑':
      req = 'race:asc';
      break;
    case 'Sort by race ↓':
      req = '/race:desc';
      break;
    default:
      req = 'name:asc';
  }
  const book = await apiSearch();
  try {
    const getCharacters = await fetch(
      `${baseurl}character?sort=${req}?limit=${limit}?page=${page}`,
      {
        headers: headers,
      }
    );
    console.log(`${baseurl}character?sort=${req}?limit=${limit}?page=${page}`);
    const characters = await getCharacters.json();
    console.log(characters);
    return characters.docs;
  } catch (e) {
    console.log('error', e);
  }
}

export async function apiCharacter(search: string) {
  const req = `character?name=${search}`;
  try {
    const getCharacter = await fetch(`${baseurl}${req}`, {
      headers: headers,
    });
    const character = await getCharacter.json();
    console.log(character);
    return character.docs;
  } catch (e) {
    console.log('error', e);
  }
}
