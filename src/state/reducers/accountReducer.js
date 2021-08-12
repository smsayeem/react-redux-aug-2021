import {
  DEPOSIT_SUCCESS,
  DEPOSIT_ERROR,
  WITHDRAW_SUCCESS,
  WITHDRAW_ERROR,
} from '../action-type';

const initialState = {
  balance: 0,
  message: '',
};

export const accountReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DEPOSIT_SUCCESS:
      return {
        balance: state.balance + parseInt(payload.value),
        message: payload.message,
      };
    case DEPOSIT_ERROR:
      return {
        ...state,
        message: payload.message,
      };
    case WITHDRAW_SUCCESS:
      return {
        balance: state.balance - parseInt(payload.value),
        message: payload.message,
      };
    case WITHDRAW_ERROR:
      return {
        ...state,
        message: payload.message,
      };
    default:
      return state;
  }
};
