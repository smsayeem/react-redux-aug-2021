import {
  DEPOSIT_SUCCESS,
  DEPOSIT_ERROR,
  WITHDRAW_SUCCESS,
  WITHDRAW_ERROR,
  SEARCH_NPM_SUCCESS,
  SEARCH_NPM_ERROR,
  SEARCH_NPM,
} from '../action-type';

export const depositActionCreator = (amount) => {
  if (amount <= 0) {
    return (dispatch) => {
      dispatch({
        type: DEPOSIT_ERROR,
        payload: {
          value: amount,
          message: 'Error: you cannot deposite zero or negative amount',
        },
      });
    };
  }
  return (dispatch) => {
    dispatch({
      type: DEPOSIT_SUCCESS,
      payload: {
        value: amount,
        message: 'Success in deposite',
      },
    });
  };
};

export const withdrawActionCreator = (params) => {
  const { balance, amount } = params;
  if (amount <= 0) {
    return (dispatch) => {
      dispatch({
        type: WITHDRAW_ERROR,
        payload: {
          value: amount,
          message: 'Error: you cannot withdraw zero or negative amount',
        },
      });
    };
  } else if (amount > balance) {
    return (dispatch) => {
      dispatch({
        type: WITHDRAW_ERROR,
        payload: {
          value: amount,
          message: 'Error: you cannot withdraw more than your balance',
        },
      });
    };
  }
  return (dispatch) => {
    dispatch({
      type: WITHDRAW_SUCCESS,
      payload: {
        value: amount,
        message: 'Success in withdraw',
      },
    });
  };
};

export const searchActionCreator = (term) => {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_NPM,
    });
    try {
      const url = `https://registry.npmjs.org/-/v1/search?text=${term}`;
      const data = await fetch(url).then((res) => res.json());
      const names = data.objects.map((item) => item.package.name);
      dispatch({
        type: SEARCH_NPM_SUCCESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_NPM_ERROR,
        payload: error.message,
      });
    }
  };
};
