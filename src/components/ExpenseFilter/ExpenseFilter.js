import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const { className: classes, value } = props;

  function selectChangetHandler(e) {
    const newValue = {
      ...value,
      [e.target.name]: e.target.value,
    };
    props.onChange(newValue);
  }

  return (
    <form>
      <div className={`form-controls ${classes}`}>
        <div className="form-control">
          <label htmlFor="year">Filter By Year</label>
          <select
            value={value.year}
            name="year"
            id="year"
            onChange={selectChangetHandler}
          >
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="sortBy">Sort By</label>
          <select
            value={value.sortBy}
            name="sortBy"
            id="sortBy"
            onChange={selectChangetHandler}
          >
            <option value="date">Date</option>
            <option value="title">Tittle</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="order">In</label>
          <select
            value={value.order}
            name="order"
            id="order"
            onChange={selectChangetHandler}
          >
            <option value="0">Ascending</option>
            <option value="1">Descending</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default ExpenseFilter;
