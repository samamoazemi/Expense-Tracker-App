const TransActionComponent = ({transactions}) => {
    return ( 
        <section>
           {transactions.length &&
            transactions.map((t) => (
           <div 
              key={t.id} 
              className="transaction" 
              style={{borderRight: t.type === "expense" && "4px solid red"}}>
               <span>{t.desc}</span>
               <span>$ {t.amount}</span>
           </div>
           ))}
        </section>
     );
}
 
export default TransActionComponent;