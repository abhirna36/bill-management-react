import React from "react";
import PropTypes from "prop-types";

DetailSection.propTypes = {
  detailList: PropTypes.any.isRequired,
};

function DetailSection(props) {
  const { detailList } = props;

  return (
    <div>
      <div className="container">
        <div className="row">
          <table className="table">
            <tbody>
            {detailList.map((detail) => (
              <tr key={detail.key} style={{ height: 30 }}>
                <td style={{ width: "35%", fontWeight: "bold" }}>{detail.key}</td>
                <td width="2%">:</td>
                <td style={{ paddingLeft: 18 }}>
                  {detail.value}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
