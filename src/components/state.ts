export interface IReducerAction {
  type:
    | 'name'
    | 'birth'
    | 'search'
    | 'death'
    | 'race'
    | 'realm'
    | 'spouse'
    | 'wikiURL'
    | 'height'
    | 'hair'
    | 'gender'
    | 'file'
    | 'sort'
    | 'limit'
    | 'paginate';
  payload: {
    newValue: string;
    error: string | null;
  };
}
export interface IState {
  name: {
    value: string;
    error: string | null;
  };
  birth: {
    value: string;
    error: string | null;
  };
  search: {
    value: string;
    error: string | null;
  };
  death: {
    value: string;
    error: string | null;
  };
  gender: {
    value: string;
    error: string | null;
  };
  race: {
    value: string;
    error: string | null;
  };
  hair: {
    value: string;
    error: string | null;
  };
  height: {
    value: string;
    error: string | null;
  };
  realm: {
    value: string;
    error: string | null;
  };
  spouse: {
    value: string;
    error: string | null;
  };
  wikiURL: {
    value: string;
    error: string | null;
  };
  file: {
    value: string;
    error: string | null;
  };
  sort: {
    value: string;
    error: string | null;
  };
  limit: {
    value: string;
    error: string | null;
  };
  paginate: {
    value: string;
    error: string | null;
  };
}
export const INITIAL_STATE = {
  name: {
    value: '',
    error: null,
  },
  search: {
    value: '',
    error: null,
  },
  birth: {
    value: '',
    error: null,
  },
  death: {
    value: '',
    error: null,
  },
  gender: {
    value: 'Female',
    error: null,
  },
  race: {
    value: 'Elves',
    error: null,
  },
  hair: {
    value: '',
    error: null,
  },
  height: {
    value: '',
    error: null,
  },
  realm: {
    value: '',
    error: null,
  },
  spouse: {
    value: '',
    error: null,
  },
  wikiURL: {
    value: '',
    error: null,
  },
  file: {
    value: '',
    error: null,
  },
  sort: {
    value: '',
    error: null,
  },
  limit: {
    value: 10,
    error: null,
  },
  paginate: {
    value: 10,
    error: null,
  },
};
/* eslint-disable */ 
export const FormReducer = (state: IState, action: IReducerAction): any => {
  switch (action.type) {
    case 'name':
      state.name.value = action.payload.newValue;
      state.name.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'birth':
      state.birth.value = action.payload.newValue;
      state.birth.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'search':
      state.search.value = action.payload.newValue;
      state.search.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'death':
      state.death.value = action.payload.newValue;
      state.death.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'gender':
      state.gender.value = action.payload.newValue;
      state.gender.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'race':
      state.race.value = action.payload.newValue;
      state.race.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'hair':
      state.hair.value = action.payload.newValue;
      state.hair.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'height':
      state.height.value = action.payload.newValue;
      state.height.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'realm':
      state.realm.value = action.payload.newValue;
      state.realm.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'spouse':
      state.spouse.value = action.payload.newValue;
      state.spouse.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'wikiURL':
      state.wikiURL.value = action.payload.newValue;
      state.wikiURL.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'file':
      state.file.value = action.payload.newValue;
      state.file.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'sort':
      state.sort.value = action.payload.newValue;
      state.sort.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'limit':
      state.limit.value = action.payload.newValue;
      state.limit.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
    case 'paginate':
      state.paginate.value = action.payload.newValue;
      state.paginate.error = action.payload.error;
      return {
        ...state,
        ...action.payload,
      };
  }
};
