import React, { useState } from 'react';

import "./ExpenseItem.css";
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";

// useState function allows us to define values as state where changes to these values should reflect
//in the component function being called again,

const ExpenseItem = (props) => {
  //props ile data tasiyoruz.
  //passing data tam olarak nasil calisti anlamadim. ( react components pass data)

  const [title, setTitle] = useState(props.title); // hooks must only be called inside of React component functions.
  //usestate sayesinde tum expenseItem (fonksiyon) tekrar yuklencek.



  const clickHandler = () => { 
    setTitle('Updated!');
    console.log(title);
  };
  // event handler oldugu icin isme clickhandler 

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler} >Change Title</button>  
    </Card>
    // button kisminda clickHandler() yazsaydim sayfa yuklenir yuklenmez fonksiyon calisacakti. -executed
    // clickHandler yazdigim icin sadece butona basinca calisiyor - pointlemek
  );
}

export default ExpenseItem;
