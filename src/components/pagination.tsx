import React from 'react';
import { useFormContext } from './formContext';

function Pagination() {
  const { state, dispatch } = useFormContext();
  const btnValue = Math.ceil(933 / Number(state.limit.value));
  const restPages = 933 % Number(state.limit.value);

  let itemsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let k = Math.floor(Number(state.paginate.value) / 10);
  if (Number(state.paginate.value) >= btnValue - 1) {
    k = btnValue - 1;
    itemsArr = new Array(restPages).fill(0).map((item, i) => i + 1);
  }
  const items = itemsArr.map((item) => (
    <button
      key={item + 10 * k}
      className={
        Number(state.paginate.value) == item + 10 * k
          ? 'pagination__item chosen-page'
          : 'pagination__item pagination_page'
      }
      value={item + 10 * k}
      onClick={(e) =>
        dispatch({
          type: 'paginate',
          payload: {
            newValue: (e.target as HTMLButtonElement).value,
            error: 'error',
          },
        })
      }
    >
      {item + 10 * k}
    </button>
  ));
  const paginateBack = () => {
    if (Number(state.paginate.value) <= 0) {
      dispatch({
        type: 'paginate',
        payload: {
          newValue: 1,
          error: 'error',
        },
      });
    } else {
      dispatch({
        type: 'paginate',
        payload: {
          newValue: Number(state.paginate.value) - 1,
          error: 'error',
        },
      });
    }
  };
  const paginateFront = () => {
    if (Number(state.paginate.value) > btnValue) {
      dispatch({
        type: 'paginate',
        payload: {
          newValue: btnValue,
          error: 'error',
        },
      });
    } else {
      dispatch({
        type: 'paginate',
        payload: {
          newValue: Number(state.paginate.value) + 1,
          error: 'error',
        },
      });
    }
  };
  return (
    <div>
      <div className="pagination">
        <button
          className="pagination__item pagination_page"
          value="1"
          onClick={(e) =>
            dispatch({
              type: 'paginate',
              payload: {
                newValue: (e.target as HTMLButtonElement).value,
                error: 'error',
              },
            })
          }
        >
          &lt;&lt;
        </button>
        <button className="pagination__item pagination_back" value="&lt" onClick={paginateBack}>
          &lt;
        </button>
        <>{items}</>
        <button className="pagination__item pagination_front" value="&gt" onClick={paginateFront}>
          &gt;
        </button>
        <button
          className="pagination__item pagination_page"
          value={btnValue}
          onClick={(e) =>
            dispatch({
              type: 'paginate',
              payload: {
                newValue: (e.target as HTMLButtonElement).value,
                error: 'error',
              },
            })
          }
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
