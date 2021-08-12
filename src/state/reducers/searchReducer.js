import {
  SEARCH_NPM_ERROR,
  SEARCH_NPM_SUCCESS,
  SEARCH_NPM,
} from '../action-type';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_NPM:
      return { data: [], error: null, loading: true };
    case SEARCH_NPM_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case SEARCH_NPM_ERROR:
      return {
        data: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
