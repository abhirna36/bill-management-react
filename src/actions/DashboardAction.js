import * as DataService from "../networkLayer/ApiService";
import * as ActionType from "./types";
import { API_BASE_URL, BILL_SERVICES } from "../networkLayer/ApiEndpoints";
import { store } from "../App";
import { MONTHLY_BUDGET } from "../constants/Constant";

/**
 * Function to fetch Bill List from the server
 */
export const fetchBills = () => {
  return async (dispatch) => {
    try {
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

/**
 * Function to delete Bill
 * @param {id of the bill which we need to delete} id 
 */
export const deleteBill = (id) => {
  return async (dispatch) => {
    try {
      let payload = {
        bills: [],
      };
      let billList = store.getState().dashboardReducer.billList;

      payload.bills = billList.filter((bill) => {
        return bill.id !== id;
      });

      dispatch({
        type: ActionType.DELETE_BILL_SUCCESS,
        payload: payload,
      });
    } catch (err) {}
  };
};

/**
 * Function to add a new bill to the list
 */
export const addBill = () => {
  return async (dispatch) => {
    try {
      let payload = {
        bills: [],
      };
      let billList = [...store.getState().dashboardReducer.billList];
      let dummyBillObject = {
        id: billList.length + 1,
        description: "Filpkart",
        category: "shopping",
        amount: "101",
        date: "10-07-2020",
      };
      billList.push(dummyBillObject);
      payload.bills = billList;
      dispatch({
        type: ActionType.ADD_BILL_SUCCESS,
        payload: payload,
      });
    } catch (err) {}
  };
};

export const calculatePayableBill = () => {
  return async (dispatch) => {
    try {
      let payload = {
        payableBill: [],
      };
      let billList = [...store.getState().dashboardReducer.billList];

      billList = billList.sort(
        (a, b) => parseInt(b.amount) - parseInt(a.amount)
      );

      let totalSum = 0;
      let ids = [];
      billList.forEach((element) => {
        if (totalSum + parseInt(element.amount) <= MONTHLY_BUDGET) {
          totalSum += parseInt(element.amount);
          ids.push(element.id);
        }
      });
      payload.payableBill = ids;
      dispatch({
        type: ActionType.PAYABLE_BILL_LIST_CREATED,
        payload: payload,
      });
    } catch (err) {}
  };
};
