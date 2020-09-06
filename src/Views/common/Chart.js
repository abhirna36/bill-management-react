import React, {useState, useEffect} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";

function CustomChart(props) {
  const [bill, setBills] = useState([]);
  const condition = Boolean(Math.round(Math.random()));

  useEffect(() =>{
    let list =[];
    props.billList.forEach((item) => {
      let tempDate = item.date.split("-")
      list.push( { x: Date.UTC(tempDate[2], tempDate[1], tempDate[0]), y: parseInt(item.amount) });
    });
    setBills(list);
  },[])

  const options = {
    series: [
      {
        data: bill,
      },
    ],
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        day: condition ? "%e-%b-%y" : "%e%b%y",
        month: condition ? "%b-%y" : "%b '%y",
      },
    },
    title: {
      text: 'Time series Analysis of bills'
  }
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
const mapStateToProps = ({ dashboardReducer }) => {
  const { billList } = dashboardReducer;
  return { billList };
};

export default connect(mapStateToProps, {})(CustomChart);
