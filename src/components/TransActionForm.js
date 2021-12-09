const TransActionForm = () => {
    // type , amount , desc
    return ( 
        <form>
            <input type="text" name="desc"/>
            <input type="number" name="amount"/>
            <div>
                <input type="radio" value="expense" name="type" />
                <label>expense</label>
                <input type="radio" value="income" name="type" />
                <label>income</label>
            </div>
            <button>Add transaction</button>
        </form>
     );
}
export default TransActionForm;