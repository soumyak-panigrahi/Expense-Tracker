import './ExpenseDate.css'

function ExpenseDate(props)
{
    const {date} = props;

    const month = date.toLocaleString("en-US", {month: "long"}) ?? "January";
    const day = date.toLocaleString("en-US", {day: "2-digit"}) ?? "1";
    const year = date.getFullYear() ?? "2022";

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;