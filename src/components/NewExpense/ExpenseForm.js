import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // }); // This is not an effective way

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // }); // This is the effective way in which all previous state
        // Since react schedules updates and if lot of updates
        // are sheduled at the same time then we can dpend on 
        // incorrect or outdated state snapshot if we follow above way
        // of copying userInput first then overriding. Instead follow prevState 
        // approach which will give latest state snapshot keeping all
        // scheduled state updates in mind. So use funtion syntax

    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate) 
            // it will parse the entered date string and convert it into date object
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');  // this overrides what user entered when form was submitted
        setEnteredAmount(''); // therefore, clears the input
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    {/* adding value=enteredTitle is two way binding, 
                    because we don't just listen to changes in the input to update the state
                    but we also feed the state back into input so that
                    when state change ==> input also change
                    so we call setEnteredTitle onSubmit to set it back to empty string */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;