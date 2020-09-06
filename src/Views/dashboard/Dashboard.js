import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import Text from "../common/Text";
import Filter from "../common/Filter";
import { connect } from "react-redux";
import { fetchBills, deleteBill } from "../../actions/index";
import { Button, ListItem, CardContent } from "@material-ui/core";
import List from "../common/List";
import BottomComponent from "../bottomComponent/BottomComponent";

function Dashboard(props) {
  const [state, setBills] = useState({
    filteredBills: [],
  });

  function FilterBillHandler(value) {
    console.log("Value of filter", value);
    console.log(
      "Value of filterList before filtering",
      JSON.stringify(state.filteredBills)
    );
    if (value) {
      setBills({
        ...state,
        filteredBills: props.billList.filter(
          (element) => element.category === value
        ),
      });
      console.log("Filtered list", JSON.stringify(state.filteredBills));
    }
  }

  useEffect(() => {
    props.fetchBills();
  }, []);

  const deleteBillclick = (event, bill) => {
    console.log("Value of item for delete", JSON.stringify(bill));
    props.deleteBill(bill.id);
  };

  const renderBills = (list) => {
    console.log("List in render bills", JSON.stringify(list));
    return (
      <div>
        <List list={list} deleteClick={deleteBillclick} />
      </div>
    );
  };

  return (
    <div>
      <Text
        textStyle={"dashboard-header"}
        text={"Bill DashBoard"}
        textContainerStyle={"dashboard-header-container"}
      />

      <Filter FilterBillHandler={FilterBillHandler}></Filter>

      {props.billList.length > 0 &&
        renderBills(
          state.filteredBill && state.filteredBill.length > 0
            ? state.filteredBills
            : props.billList
        )}

      <BottomComponent
        list={
          state.filteredBill && state.filteredBill.length > 0
            ? state.filteredBills
            : props.billList
        }
      />
    </div>
  );
}

const mapStateToProps = ({ dashboardReducer }) => {
  const { billFetchError, billList } = dashboardReducer;
  return { billFetchError, billList };
};

export default connect(mapStateToProps, {
  fetchBills,
  deleteBill,
})(Dashboard);
