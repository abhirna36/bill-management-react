import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

List.propTypes = {
  list: PropTypes.any.isRequired,
};

const renderRow = (list, deleteClick, payableBills) => {
  return list.map((item, index) => {
    return (
      <ListItem
        key={index}
        listItem={item}
        deleteClick={deleteClick}
        payable={payableBills.includes(item.id) ? true : false}
      ></ListItem>
    );
  });
};

function List(props) {
  const { list, deleteClick, payableBills } = props;
  return renderRow(list, deleteClick, payableBills);
}

export default List;
