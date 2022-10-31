import React from 'react';
import { useFormContext } from '../../components/formContext';

export default function Name() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Name:
      <input
        className="textbox"
        type="text"
        value={state.name.value}
        onChange={(e) => {
          dispatch({
            type: 'name',
            payload: {
              newValue: (e.target as HTMLInputElement).value,
              error: 'error',
            },
          });
        }}
      />
    </label>
  );
}
