import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import Text from "../common/Text";
import Filter from "../common/Filter";
import { connect } from "react-redux";
import {
  fetchBills,
  deleteBill,
  addBill,
  calculatePayableBill,
} from "../../actions/index";
import { Button } from "@material-ui/core";
import List from "../common/List";
import BottomComponent from "../bottomComponent/BottomComponent";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const [state, setBills] = useState({
    filteredBills: [],
  });

  /**
   * Click handler for Filering bill
   * @param {*} value 
   */
  function FilterBillHandler(value) {
    console.log("Value of filter", value);
    if (value) {
      setBills({
        ...state.filteredBills,
        filteredBills: props.billList.filter(
          (element) => element.category === value
        ),
      });
    }
  }

  useEffect(() => {
    props.fetchBills();
  }, []);

  /**
   * Click Handler for delete bill
   * @param {*} event 
   * @param {*} bill 
   */
  const deleteBillclick = (event, bill) => {
    props.deleteBill(bill.id);
  };

  const renderBills = (list, payableBill) => {
    return (
      <div>
        <List
          list={list}
          deleteClick={deleteBillclick}
          payableBills={payableBill}
        />
      </div>
    );
  };

  /**
   * Click handler for reset the bill list to the initial state
   */
  const resetClick = () => {
    setBills({
      ...state.filteredBills,
      filteredBills: [],
    });
    props.fetchBills();
  };

  /**
   * Click handler for adding a new bill to the list
   */
  const addBillClick = () => {
    props.addBill();
  };

  /**
   * click handler to calculate minimum bill which can be paid within a budget
   */
  const minimumBillPay = () => {
    props.calculatePayableBill();
  };

  return (
    <div>
      <Text
        textStyle={"dashboard-header"}
        text={"Bill DashBoard"}
        textContainerStyle={"dashboard-header-container"}
      />

      <div className={"list-action-container"}>
        <Button onClick={() => resetClick()} variant="outlined" color="primary">
          {"Reset"}
        </Button>

        <Button onClick={() => addBillClick()} variant="outlined" color="primary">
          {"Add Bill"}
        </Button>

        <Button
          onClick={() => minimumBillPay()}
          variant="outlined"
          color="primary"
        >
          {"Minimum Bill"}
        </Button>
      </div>
      <div className={"graph-name-container"}>
        <Link to="/chart" className="btn btn-primary">
          Graph Analysis
        </Link>
      </div>

      <Filter FilterBillHandler={FilterBillHandler}></Filter>

      {props.billList.length > 0 &&
        renderBills(
          state.filteredBills && state.filteredBills.length > 0
            ? state.filteredBills
            : props.billList,
          props.payableBill
        )}

      <BottomComponent
        list={
          state.filteredBills && state.filteredBills.length > 0
            ? state.filteredBills
            : props.billList
        }
      />
    </div>
  );
}

const mapStateToProps = ({ dashboardReducer }) => {
  const { billFetchError, billList, payableBill } = dashboardReducer;
  return { billFetchError, billList, payableBill };
};

export default connect(mapStateToProps, {
  fetchBills,
  deleteBill,
  addBill,
  calculatePayableBill,
})(Dashboard);
