import { useState } from "react/cjs/react.development";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({expense, income, addTransaction}) => {
    const[isShow, setIsShow] = useState(false);
    return ( 
        <>
         <div className="firstSection">
                <p> Balance : {income - expense} </p>
                <button onClick={() => setIsShow((prevState) => !prevState)}
                 className={`btn ${isShow && "cancel"}`}
                 >
                    {isShow ? "cancel" : "add"}
                </button>
            </div>
            {isShow && (
            <TransActionForm 
              addTransaction={addTransaction} 
              setIsShow={setIsShow}
            /> 
            )}
            <div className="secondSection">
                <div className="expenseBox">
                    expense <span style={{color : "red"}}>{expense} $</span>
                </div>
                <div className="expenseBox">
                    income <span>{income} $</span>
                </div>
            </div>
        </>
     );
}
 
export default OverViewComponent;