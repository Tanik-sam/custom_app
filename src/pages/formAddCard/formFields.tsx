import React from 'react';
import { useFormContext } from '../../components/formContext';
import { validateForm } from '../../components/validation';

export function Name() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Name:
      <input
        className="textbox"
        type="text"
        name="name"
        value={state.name.value}
        onChange={(e) => {
          dispatch({
            type: 'name',
            payload: {
              newValue: (e.target as HTMLInputElement).value,
              error: validateForm(
                (e.target as HTMLInputElement).name,
                (e.target as HTMLInputElement).value
              ),
            },
          });
        }}
      />
      <span style={{ color: 'red' }}>{state.name.error}</span>
    </label>
  );
}

export function Birth() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Birth:
      <input
        className="textbox"
        name="birth"
        type="text"
        value={state.birth.value}
        onChange={(e) => {
          dispatch({
            type: 'birth',
            payload: {
              newValue: (e.target as HTMLInputElement).value,
              error: validateForm(
                (e.target as HTMLInputElement).name,
                (e.target as HTMLInputElement).value
              ),
            },
          });
        }}
      />
      <span style={{ color: 'red' }}>{state.birth.error}</span>
    </label>
  );
}

export function Death() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Death:
      <input
        className="textbox"
        name="death"
        type="text"
        value={state.death.value}
        onChange={(e) => {
          dispatch({
            type: 'death',
            payload: {
              newValue: (e.target as HTMLInputElement).value,
              error: validateForm(
                (e.target as HTMLInputElement).name,
                (e.target as HTMLInputElement).value
              ),
            },
          });
        }}
      />
      <span style={{ color: 'red' }}>{state.death.error}</span>
    </label>
  );
}

export function Race() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Race:
      <select
        name="race"
        className="textbox"
        value={state.race.value}
        onChange={(e) => {
          dispatch({
            type: 'race',
            payload: {
              newValue: (e.target as HTMLSelectElement).value,
              error: validateForm(
                (e.target as HTMLSelectElement).name,
                (e.target as HTMLSelectElement).value
              ),
            },
          });
        }}
      >
        <option className="form-add__text">Elves</option>
        <option className="form-add__text">Men</option>
        <option className="form-add__text">Dwarves</option>
        <option className="form-add__text">Hobbits</option>
        <option className="form-add__text">Ents</option>
        <option className="form-add__text">Orcs</option>
        <option className="form-add__text">Trolls</option>
        <option className="form-add__text">Valar</option>
        <option className="form-add__text">Maiar</option>
        <option className="form-add__text">Other</option>
      </select>
    </label>
  );
}

export function Realm() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Realm:
      <input
        name="realm"
        className="textbox"
        type="text"
        value={state.realm.value}
        onChange={(e) => {
          dispatch({
            type: 'realm',
            payload: {
              newValue: (e.target as HTMLInputElement).value,
              error: validateForm(
                (e.target as HTMLInputElement).name,
                (e.target as HTMLInputElement).value
              ),
            },
          });
        }}
      />
      <span style={{ color: 'red' }}>{state.realm.error}</span>
    </label>
  );
}

export function Gender() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Gender:
      <select
        name="gender"
        className="textbox"
        value={state.gender.value}
        onChange={(e) => {
          dispatch({
            type: 'gender',
            payload: {
              newValue: (e.target as HTMLSelectElement).value,
              error: validateForm(
                (e.target as HTMLSelectElement).name,
                (e.target as HTMLSelectElement).value
              ),
            },
          });
        }}
      >
        <option className="form-add__text">Female</option>
        <option className="form-add__text">Male</option>
        <option className="form-add__text">Unknown</option>
      </select>
    </label>
  );
}

export function Hair() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Hair:
      <input
        name="hair"
        className="textbox"
        type="text"
        value={state.hair.value}
        onChange={(e) => {
          dispatch({
            type: 'hair',
            payload: {
              newValue: (e.target as HTMLInputElement).value,
              error: validateForm(
                (e.target as HTMLInputElement).name,
                (e.target as HTMLInputElement).value
              ),
            },
          });
        }}
      />
      <span style={{ color: 'red' }}>{state.hair.error}</span>
    </label>
  );
}

export function Height() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Height:
      <input
        name="height"
        className="textbox"
        type="text"
        value={state.height.value}
        onChange={(e) => {
          dispatch({
            type: 'height',
            payload: {
              newValue: (e.target as HTMLInputElement).value,
              error: validateForm(
                (e.target as HTMLInputElement).name,
                (e.target as HTMLInputElement).value
              ),
            },
          });
        }}
      />
      <span style={{ color: 'red' }}>{state.height.error}</span>
    </label>
  );
}

export function WikiURL() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      WikiURL:
      <input
        name="wikiURL"
        className="textbox"
        type="text"
        value={state.wikiURL.value}
        onChange={(e) => {
          dispatch({
            type: 'wikiURL',
            payload: {
              newValue: (e.target as HTMLInputElement).value,
              error: validateForm(
                (e.target as HTMLInputElement).name,
                (e.target as HTMLInputElement).value
              ),
            },
          });
        }}
      />
      <span style={{ color: 'red' }}>{state.wikiURL.error}</span>
    </label>
  );
}

export function Spouse() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Spouse:
      <input
        name="spouse"
        className="textbox"
        type="text"
        value={state.spouse.value}
        onChange={(e) => {
          dispatch({
            type: 'spouse',
            payload: {
              newValue: (e.target as HTMLInputElement).value,
              error: validateForm(
                (e.target as HTMLInputElement).name,
                (e.target as HTMLInputElement).value
              ),
            },
          });
        }}
      />
      <span style={{ color: 'red' }}>{state.spouse.error}</span>
    </label>
  );
}

export function File() {
  const { state, dispatch } = useFormContext();
  return (
    <label className="form-add__text">
      Select file:
      <input
        name="file"
        type="file"
        className="textbox"
        value={state.spouse.value}
        onChange={(e) => {
          dispatch({
            type: 'file',
            payload: {
              newValue: (e.target as HTMLInputElement).value,
              error: validateForm(
                (e.target as HTMLInputElement).name,
                (e.target as HTMLInputElement).value
              ),
            },
          });
        }}
      />
      <span style={{ color: 'red' }}>{state.file.error}</span>
    </label>
  );
}
