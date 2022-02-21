import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../Card";
import "./NewExpense.css";

function NewExpense(props) {
  const [compactMode, setCompactMode] = useState(true);

  function saveNewExpenseDataHandler(expense) {
    props.onSave(expense);
  }

  function resetHandler() {
    setCompactMode((previousState) => {
      return previousState === true ? false : true;
    });
  }

  return (
    <Card className="new-expense">
      <ExpenseForm
        isCompact={compactMode}
        onSaveNewExpenseData={saveNewExpenseDataHandler}
        onReset={resetHandler}
      />
    </Card>
  );
}

export default NewExpense;
