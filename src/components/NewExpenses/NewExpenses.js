import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setOpenSection(false);
  };

  const [openSection, setOpenSection] = useState(false);

  function closeSectionHandler() {
    setOpenSection(false);
  }

  function openSectionHandler() {
    setOpenSection(true);
  }

  return (
    <div className="new-expense">
      {openSection === true ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onSection={closeSectionHandler}
        />
      ) : (
        <button onClick={openSectionHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
