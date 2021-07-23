import React from 'react';

import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            {/* A function will be triggered when something happens inside of this 
            component so we started the name of prop with 'on' 
            in this case when user submits the form i.e saves the entered expense data*/}
        </div>
    );
};

export default NewExpense;