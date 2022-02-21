import React, { useState } from "react";

import ExpenseContent from "./components/ExpenseContent";
import NewExpense from "./components/NewExpense/NewExpense";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState([
    {
      id: uuidv4(),
      title: "Apples",
      amount: "00.50",
      date: new Date(2022, 4, 22),
    },
    {
      id: uuidv4(),
      title: "Fan",
      amount: "50.00",
      date: new Date(2022, 5, 5),
    },
    {
      id: uuidv4(),
      title: "Pants",
      amount: "10.00",
      date: new Date(2022, 6, 21),
    },
    {
      id: uuidv4(),
      title: "Paper",
      amount: "05.00",
      date: new Date(2022, 7, 11),
    },
    {
      id: uuidv4(),
      title: "Bed",
      amount: "500.00",
      date: new Date(2021, 11, 28),
    },
    {
      id: uuidv4(),
      title: "BedSheets",
      amount: "20.00",
      date: new Date(2021, 0, 5),
    },
  ]);

  function saveHandler(expense) {
    setData((previousState) => {
      const newExpense = {
        ...expense,
        id: uuidv4(),
      };
      const nextState = [...previousState, newExpense];
      return nextState;
    });
  }

  return (
    <div className="App">
      <NewExpense onSave={saveHandler} />
      <ExpenseContent data={data} />
    </div>
  );
}

export default App;
