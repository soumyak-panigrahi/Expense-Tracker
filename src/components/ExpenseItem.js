import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React from "react";

const obj = {
  date: new Date(2022, 0, 1),
  title: "Unknown",
  amount: "$0.00",
};

function ExpenseItem(props) {
  const { data } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={data?.date ?? obj.date} />
      <div className="expense-item__details">
        <h2 className="expense-item__details-title">
          {data?.title ?? obj.title}
        </h2>
        <div className="expense-item__details-amount">
          {data?.amount ?? obj.amount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
