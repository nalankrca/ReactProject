import React, { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  };
  const filtredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFiler={filterChangeHandler} />          {/*ExpemseFilter */}
      <ExpensesChart expenses={filtredExpenses} />
      <ExpensesList items={filtredExpenses}/>
    </Card>
  );
}

export default Expenses;