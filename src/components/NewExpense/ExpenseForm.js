import React , {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
  
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredData, setEnteredData] = useState('');

//   // const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount : '',
//     enteredData : '',
//    });


    const titleChangeHandler = (event)=>{ //Listener to user input  53.ders
     setEnteredTitle(event.target.value);
    //    setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    //    });

    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    //    setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    //    });
    }
    const dateChangeHandler = (event) =>{
        setEnteredData(event.target.value);
    //    setUserInput({
    //     ...userInput,
    //     enteredData:event.target.value,
    //    });
    }

    const submitHAndler = (event) =>{ //formdaki Add Expense butonuna tıklandığı anda inputdaki bilgileri alır
        event.preventDefault(); //sayfa güncellenmez aynı sayfada kalmasını sağlar
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date : new Date(enteredData)
        };
        

        props.onSaveExpenseDate(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredData('');
    };
    return(
        <form onSubmit={submitHAndler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2022-12-31'value={enteredData} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

}
export default ExpenseForm;