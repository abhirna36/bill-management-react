import * as DataService from "../networkLayer/ApiService";
import * as ActionType from "./types";
import { API_BASE_URL, BILL_SERVICES } from "../networkLayer/ApiEndpoints";
import { store } from "../App";

export const fetchBills = () => {
  return async (dispatch) => {
    try {
      // Replace localhost with customer url once backend api is pushed to server
      const endPoint = API_BASE_URL;
      const path = BILL_SERVICES.FETCH_BILL_API;
      let payload = {
        bills: null,
      };
      const response = await DataService.callGetAPI(endPoint, path);
      console.log("Response received", JSON.stringify(response));
      if (response) {
        payload.bills = response.bills;
        dispatch({
          type: ActionType.BILL_FETCH_SUCCESS,
          payload: payload,
        });
      }
    } catch (err) {
      console.log("Error received in API", err);
      let payload = {
        errorMessage: err.message,
      };
      dispatch({
        type: ActionType.BILL_FETCH_FAIL,
        payload: payload,
      });
    }
  };
};

export const deleteBill = (id) => {
  return async (dispatch) => {
    try {
      let payload = {
        bills: null,
      };
      let billList = store.getState().dashboardReducer.billList;

      console.log("BillList from store", billList);
      payload.bills = billList.filter((bill) => {
        return bill.id !== id;
      });
      
      dispatch({
        type: ActionType.DELETE_BILL_SUCCESS,
        payload: payload,
      });
      console.log("Value of list after deletion", billList);
    } catch (err) {}
  };
};
