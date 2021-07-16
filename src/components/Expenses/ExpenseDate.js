import React from 'react';

import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    // when date = {props.date} is passed with ExpenseDate from 
    // ExpenseItem component then we are able to access date in this component.

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );

}

export default ExpenseDate;