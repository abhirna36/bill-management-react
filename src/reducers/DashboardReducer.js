import {
  BILL_FETCH_SUCCESS,
  BILL_FETCH_FAIL,
  DELETE_BILL_SUCCESS,
  ADD_BILL_SUCCESS,
  PAYABLE_BILL_LIST_CREATED
} from "../actions/types";

const INITIAL_STATE = {
  billList: [],
  billFetchError: "",
  payableBill: [],
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
    case ADD_BILL_SUCCESS:
      return { ...state, ...INITIAL_STATE, billList: action.payload.bills };
    case PAYABLE_BILL_LIST_CREATED:
      return {
        ...state,
        payableBill: action.payload.payableBill,
      };
    default:
      return state;
  }
};
