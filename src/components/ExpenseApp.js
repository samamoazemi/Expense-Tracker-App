import { useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";


const ExpenseApp = () => {
    const[expense, setExpense] = useState(0);
    const[income, setIncome] = useState(0);
    const[transactions, setTransactions] = useState([]);
    return (  
        <section className="container">
            <OverViewComponent expense={expense} income={income}/>
            <TransActionComponent transactions={transactions}/>
        </section>
    );
}
 
export default ExpenseApp;