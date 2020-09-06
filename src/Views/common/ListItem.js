import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button } from '@material-ui/core';
import "./styles/listItem.scss";

ListItem.propTypes = {
  listItem: PropTypes.any.isRequired,
  payable: PropTypes.any.isRequired
};

function ListItem(props) {
  const { listItem, deleteClick, payable } = props;

  return (
    <Card variant="outlined" style={styles.containerStyle}>
      <CardContent>
        <div className="list-item-conatiner-class">
          <div>
            <Text text={listItem.description} />
            <Text text={listItem.category} />
            <Text text={listItem.date} />
          </div>
          <div>
            <Text text={`Rs. ${listItem.amount}`} />
            {payable && <Text text={`Payable`} />}
            <Button
              style={styles.deleteButtonStyle}
              onClick={(event) => deleteClick(event, listItem)}
              variant="outlined"
              color="primary"
              disableElevation
            >
              {"Delete"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
const styles = {
  containerStyle: {
    margin: 7,
  },
  deleteButtonStyle: {
      marginTop: 24
  }
};

export default ListItem;
