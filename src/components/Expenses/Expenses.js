import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFiler={filterChangeHandler}
        />
        {/* onSaveYear pickedYearHandler ==> names I chose */}
        {/* we make another prop selected and pas filtered year so that default year set up is 2020
            This is 2 way-binding */}

        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        {/* <ExpenseItem title = { props.items[3].title} amount = { props.items[3].amount} date = { props.items[3].date}/> */}

        {/* these attribute values (title, amount, date) has to be used in 
      ExpenseItem.js through props object passed in this custom component */}
      </Card>
    </div>
  );
};

export default Expenses;
