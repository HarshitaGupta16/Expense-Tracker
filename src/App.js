import React, { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    // add year then month then numbr of days in that month
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
      // here we return an array with expense as first element which we are 
      // getting in this function as argument and add the previous expenses
      // by using spread operator
      // this is how state is updated
    });
  };

// This is an alternative to the JSX code and that's why we had to import React 
// because this is the internal code which automatically creted when you use JSX
// in React.createElement we pass first the element then propertires or attributes
// and then the content inside that opening and closing of that element.

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  //   );


// From above JSX alternative we can understand why we have to 
// return a wrapping element as a root JSX element. You can return array
//  of elements but we want here to return 2 separate side by side elements
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
