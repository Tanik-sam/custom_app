import { createContext, useContext } from 'react';
import { IState } from './state';

interface IContextProps {
  state: IState;
/* eslint-disable */ 
  dispatch: any
}
export const FormContext = createContext({} as IContextProps);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }
  return context;
}
