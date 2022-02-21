import HistogramBar from "./HistogramBar";
import Card from "../Card";

import "./ExpenseHistogram.css";

function ExpenseHistogram(props) {
  const { max, data } = props;

  const JSX = data.map((datum) => {
    return (
      <div className="histogram-bar" key={datum.label}>
        <HistogramBar max={max} value={datum.value} />
        <span>{datum.label}</span>
      </div>
    );
  });
  return <Card className="histogram">{JSX}</Card>;
}

export default ExpenseHistogram;
