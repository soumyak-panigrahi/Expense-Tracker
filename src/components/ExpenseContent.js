import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseHistogram from "./ExpenseHistogram/ExpenseHistogram";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "./Card";
import "./ExpenseContent.css";

function ExpenseContent(props) {
  const { data } = props;

  const [selectInputData, setSelectInputData] = useState({
    year: "2018",
    sortBy: "date",
    order: "0",
  });

  function changeHandler(obj) {
    setSelectInputData({ ...obj });
  }

  const filteredData = data.filter(
    (d) => d.date.getFullYear() === parseInt(selectInputData.year)
  );

  filteredData.sort((a, b) => {
    const { sortBy } = selectInputData;
    if (a[sortBy] > b[sortBy]) return 1;
    return -1;
  });

  if (selectInputData.order === "1") filteredData.reverse();

  const histogramData = [];
  let max = 0;

  for (let i = 0; i < 12; i++) {
    const date = new Date(1999, i, 1);
    const month = date.toLocaleString("en-US", { month: "short" });
    histogramData.push({
      value: 0,
      label: month,
    });
  }

  for (let datum of filteredData) {
    const mon = datum.date.getMonth();

    histogramData[mon].value += parseInt(datum.amount);
    max = max < histogramData[mon].value ? histogramData[mon].value : max;
  }

  return (
    <Card className="expense-content">
      <ExpenseFilter
        className="expense-filter"
        value={selectInputData}
        onChange={changeHandler}
      />
      <ExpenseHistogram max={max} data={histogramData} />

      {filteredData.map((datum) => (
        <ExpenseItem key={datum.id} data={datum} />
      ))}
    </Card>
  );
}

export default ExpenseContent;
