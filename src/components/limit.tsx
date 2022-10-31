import React from 'react';
import { useFormContext } from './formContext';

function Limit() {
  const { state, dispatch } = useFormContext();
  return (
    <div>
      <select
        className="header__limit limit"
        value={state.limit.value}
        onChange={(e) => {
          dispatch({
            type: 'limit',
            payload: {
              newValue: (e.target as HTMLSelectElement).value,
              error: 'error',
            },
          });
        }}
      >
        <option className="form-add__text">4</option>
        <option className="form-add__text">10</option>
        <option className="form-add__text">20</option>
        <option className="form-add__text">50</option>
        <option className="form-add__text">100</option>
      </select>
    </div>
  );
}

export default Limit;
