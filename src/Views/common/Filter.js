import React, { useState } from "react";
import styles from "./styles/filterStyle.scss";

const Filter = ({ FilterBillHandler }) => {
  const [value, setSearch] = useState("");

  function filterHandler({ value }) {
    setSearch(value);
    FilterBillHandler(value);
  }
  return (  
    <div className={"filter-container-class"}>
      <select value={value} onChange={(e) => filterHandler(e.target)}>
        <option value="" disabled hidden>
          Filter By Category
        </option>
        <option value="Food">Food</option>
        <option value="Utility">Utility</option>
        <option value="shopping">shopping</option>
        <option value="education">education</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Travel">Travel</option>
      </select>
    </div>
  );
};
export default Filter;
