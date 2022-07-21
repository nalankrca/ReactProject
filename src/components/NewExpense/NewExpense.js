import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense =(props)=>{

  const [isEditing,setISEditing]=  useState(false);  
    const saveExpenseDataHandler=(enteredExpenseDate) => { // Add Expense button aktif olduğunda
        const expenseDate = {
            ...enteredExpenseDate,
            id:Math.random().toString()
        };

        props.onAddExpense(expenseDate);
        setISEditing(false);
    }

    const startEditingHandler =() =>{
        setISEditing(true);
    }
    const endEditingHandler = () => {
        setISEditing(false);
    }

    return(
        <div className="new-expense">
            {! isEditing &&<button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onCancel={endEditingHandler}/>}
        </div>
    );
}
export default NewExpense;