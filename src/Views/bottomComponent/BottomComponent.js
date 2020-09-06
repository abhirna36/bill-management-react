import React from "react";
import PropTypes from "prop-types";
import Text from "../common/Text";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./bottomComponent.scss";

BottomComponent.propTypes = {
  list: PropTypes.any,
};

function BottomComponent(props) {
  const { list } = props;

  const renderTotalAmount = () => {
    let sum = 0;
    if (list) {
      list.forEach((arg) => {
        sum += parseInt(arg.amount);
      });
    }
    return <Text text={`Rs. ${sum}`} />;
  };

  return (
    <Card variant="outlined" style={styles.containerStyle}>
      <CardContent>
        <div className="list-item-conatiner-class">
          <div>
            <Text text={"Total Bill Amount"} />
          </div>
          <div>{renderTotalAmount()}</div>
        </div>
      </CardContent>
    </Card>
  );
}
const styles = {
  containerStyle: {
    margin: 7,
    backgroundColor: "#D0D0D0"
  },
};

export default BottomComponent;
