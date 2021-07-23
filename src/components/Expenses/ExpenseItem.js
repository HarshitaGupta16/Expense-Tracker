import React from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// A component in react is just a javascript function
const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                {/* here props.title is {expenses[0].title} defined in App.js */}
                <div className="expense-item__price">₹ {props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;