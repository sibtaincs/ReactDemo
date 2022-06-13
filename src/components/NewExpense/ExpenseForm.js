import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [entereAmount, setenteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

//   const [userInput, setUserInput] = useState({
//     enteredtitle: "",
//     enteredamount: "",
//     entereddate: "",
//   });

  const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredtitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //    return {...prevState, enteredtitle: event.target.value}
    // });
  }; 

  const amountChangeHandler = (event) => {
      setenteredAmount(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    enteredamount: event.target.value,
    //  });
  };

  const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    entereddate: event.target.value,
    //  });
  };


 const submitHandler=(event)=>{
  
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: entereAmount,
        date: new Date(enteredDate),
      };
     props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setenteredAmount(''); 
      setEnteredDate();

 };



  return (
    <form onSubmit={submitHandler}>
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
            value={entereAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2021-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" className="">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
