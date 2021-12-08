import { useState } from "react";
import TransActionComponent from "../TransAction/TransActionComponent";
import style from "./ExpenseApp.module.css";

const ExpenseApp = () => {
    const[expense, setExpense] = useState(0);
    const[income, setIncome] = useState(0);
    const[transactions, setTransactions] = useState([]);
    return (  
        <section className={style.container}>
            <div className={style.firstSection}>
                <p> Balance : {income - expense} </p>
                <button>Add</button>
            </div>
            <div className={style.secondSection}>
                <div>expense {expense}</div>
                <div>income {income}</div>
            </div>
            <TransActionComponent transactions={transactions}/>
        </section>
    );
}
 
export default ExpenseApp;