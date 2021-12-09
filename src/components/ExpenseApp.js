import { useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";


const ExpenseApp = () => {
    const[expense, setExpense] = useState(0);
    const[income, setIncome] = useState(0);
    const[transactions, setTransactions] = useState([]);

    const addTransaction = (formValues) => {
        // console.log(formValues)
        const data = {...formValues, id: Date.now() };
        setTransactions([...transactions, data]);
    }
    return (  
        <section className="container">
            <OverViewComponent 
              expense={expense} 
              income={income} 
              addTransaction={addTransaction}
            />
            <TransActionComponent transactions={transactions}/>
        </section>
    );
}
 
export default ExpenseApp;