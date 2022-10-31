import React, { useRef } from 'react';
import { useFormContext } from './formContext';

function Sort() {
  const { state, dispatch } = useFormContext();
  const sortRef = useRef<HTMLSelectElement>(null);
  return (
    <div>
      <select
        className="header__sort sort"
        value={state.sort.value}
        ref={sortRef}
        onChange={(e) => {
          dispatch({
            type: 'sort',
            payload: {
              newValue: (e.target as HTMLSelectElement).value,
              error: 'error',
            },
          });
        }}
      >
        <option className="form-add__text">Sort by name &#8593;</option>
        <option className="form-add__text">Sort by name &#8595;</option>
        <option className="form-add__text">Sort by birth &#8593;</option>
        <option className="form-add__text">Sort by birth &#8595;</option>
        <option className="form-add__text">Sort by race &#8593;</option>
        <option className="form-add__text">Sort by race &#8595;</option>
      </select>
    </div>
  );
}

export default Sort;
