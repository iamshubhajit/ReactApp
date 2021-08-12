import React from 'react';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';


const Expenses = (props) => {

  const [filteredYear, setFilterYear] = useState('');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  const filterExpenses = props.items.filter(expense => {
    if (filteredYear) {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return props.items;
    }

  });





  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler}></ExpensesFilter>
        <ExpensesList items={filterExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
