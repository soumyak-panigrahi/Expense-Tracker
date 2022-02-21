import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  /** Approach - 1
     * In this we define different states for each variable.
     * 
    const [inputTitle, setInputTitle] = useState(""),
        [inputAmount, setInputAmount] = useState(""),
        [inputDate, setInputDate] = useState("");

    function titleChangeHandler(e)
    {
        setInputTitle(e.target.value);
    }
    function amountChangeHandler(e)
    {
        setInputAmount(e.target.value);
    }
    function dateChangeHandler(e)
    {
        setInputDate(e.target.value);
        console.log(e.target.value);
    }

    */
  const [inputObj, setInputObj] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function inputChangeHandler(e) {
    /** Approach - 1 (Not recommanded)
         * First we shallow copy from all the previous state value and then just change 
         * targeted element value in the object
         
            setInputObj({
                ...inputObj,
                [e.target.name] : e.target.value,
            })

        */

    /** Approach - 2 (Recommanded)
     *
     * As we saw in Approach - 1, we are using the previous state value to set the current
     * state value.
     *
     * *NOTE* In React State are set asynchronously. So due to some issue or overload it may get the past
     *          state value rather than previous state.
     *
     * In this approach we do the same thing as above. But in the setter, we pass a callback
     * function which returns the current state value. And by default the first parameter
     * of the callback funtion is supplied with previous state value. So, even if they are
     * executed asynchronously, the callback function will always receive the previous state
     * only.
     *
     * Or always use the callback function approach
     */

    setInputObj((previousState) => {
      return {
        ...previousState,
        [e.target.name]: e.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    props.onSaveNewExpenseData({
      ...inputObj,
      date: new Date(inputObj.date),
    });

    setInputObj({
      title: "",
      amount: "",
      date: "",
    });

    props.onReset();
  }

  function resetHandler(e) {
    e.preventDefault();
    setInputObj({
      title: "",
      amount: "",
      date: "",
    });
    props.onReset();
  }

  if (props.isCompact) {
    return (
      <div className="compact-mode">
        <button onClick={resetHandler} className="btn">
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={inputObj.title}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="expense-form__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            column="10"
            type="number"
            min="1"
            step="0.05"
            value={inputObj.amount}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="expense-form__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            value={inputObj.date}
            onChange={inputChangeHandler}
            required
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button type="submit" className="btn">
          Add Expense
        </button>
        <button type="reset" className="btn">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
