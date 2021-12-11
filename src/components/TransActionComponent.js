import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const TransActionComponent = ({transactions}) => {
   const[searchItem, setSearchItem] = useState("");
   const[filteredTnx, setFilteredTnx] = useState(transactions);

   const filterTransactions = (search) => {
      if(!search || search === ""){
         setFilteredTnx(transactions)
         return;
      }
      const filtered = transactions.filter((t) => 
      t.desc.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredTnx(filtered);
   }

   const changeHandler = (e) => {
      setSearchItem(e.target.value)
      filterTransactions(e.target.value)
   }

   useEffect(() => {
      filterTransactions(searchItem)
   },[transactions])

   if(!transactions.length) return <h4 className="addTransaction">add some transaction !</h4>

    return ( 
        <section>
           <input 
             type="text" 
             value={searchItem} 
             onChange={changeHandler}
             placeholder="search for ..."
             className="search"
            />
           {filteredTnx.length ?
             filteredTnx.map((t) => (
            <div 
              key={t.id} 
              className="transaction" 
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
               <span>{t.desc}</span>
               <span>$ {t.amount}</span>
           </div>
           )) : <h4 className="addTransaction">no item matchs !</h4> }
        </section>
     );
}
 
export default TransActionComponent;