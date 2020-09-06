import { BILL_FETCH_SUCCESS, BILL_FETCH_FAIL,DELETE_BILL_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  billList: [],
  billFetchError: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BILL_FETCH_SUCCESS:
      return { ...state, ...INITIAL_STATE, billList: action.payload.bills };
    case BILL_FETCH_FAIL:
      return {
        ...state,
        billFetchError: action.payload.errorMessage,
      };
    case DELETE_BILL_SUCCESS:
      return { ...state, ...INITIAL_STATE, billList: action.payload.bills };
    default:
      return state;
  }
};
