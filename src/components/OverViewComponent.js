import { useState } from "react/cjs/react.development";

const OverViewComponent = ({expense, income}) => {
    const[isShow, setIsShow] = useState(false);
    return ( 
        <>
         <div className="firstSection">
                <p> Balance : {income - expense} </p>
                <button onClick={() => setIsShow((prevState) => !prevState)}>
                    {isShow ? "cancel" : "add"}
                </button>
            </div>
            {isShow && <form>add transaction form</form>}
            <div className="secondSection">
                <div>expense {expense}</div>
                <div>income {income}</div>
            </div>
        </>
     );
}
 
export default OverViewComponent;