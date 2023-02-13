import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //  --Alternatif : ustteki 3 ayri setstate yerine hepsini 1 tanede topladik

  //   const [userInput, setUserInput] = useState({
  //
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //inputta girilen veriyi targetliyoruz.

    // --Altermatif 1
    // setUserInput({
    //   ...userInput, // override yaparken amount ve date verileri yok olmasin diye eski stateden verileri yeniye ekliyoruz.
    //   enteredTitle: event.target.value,
    // });

    // -- Daha iyi alternatif 2 : react update yaparken islemi siraya ekliyor hemen yapmiyor. bu yontem sayesinde hemen yapiyor.
    // setUserInput((prevState) => {
    //     return {...prevState,enteredTitle: event.target.value}
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // --Altermatif 1
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // --Altermatif 1
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const sumbitHandler = (event) => {
    event.preventDefault(); //Bu fonksiyon çağrıldığında oluşan eventin işlevini geçersiz kılar. sumbitin request atmasini engelliyoruz
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle(""); // inputu temizlemek icin value bastik
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2020-01-01"
            max="2023-02-15"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__action">
        <button type="submit" onChange={sumbitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
