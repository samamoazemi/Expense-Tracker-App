import { useState } from "react/cjs/react.development";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({expense, income, addTransaction}) => {
    const[isShow, setIsShow] = useState(false);
    return ( 
        <>
         <div className="firstSection">
                <p> Balance : {income - expense} </p>
                <button onClick={() => setIsShow((prevState) => !prevState)}>
                    {isShow ? "cancel" : "add"}
                </button>
            </div>
            {isShow && <TransActionForm addTransaction={addTransaction}/>}
            <div className="secondSection">
                <div>expense {expense}</div>
                <div>income {income}</div>
            </div>
        </>
     );
}
 
export default OverViewComponent;