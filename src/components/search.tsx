import React, { useRef } from 'react';
import { useFormContext } from '../components/formContext';

function Search() {
  const { state, dispatch } = useFormContext();
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className="header__search">
      <input
        id="search"
        type="text"
        name="text"
        title="Gandalf, Frodo Baggins, Glorfindel, etc."
        placeholder="Search"
        value={state.search.value}
        className="search"
        ref={searchRef}
        onChange={(event) => {
          dispatch({
            type: 'search',
            payload: {
              newValue: (event.target as HTMLInputElement).value,
              error: 'error',
            },
          });
        }}
      />
    </div>
  );
}

export default Search;
