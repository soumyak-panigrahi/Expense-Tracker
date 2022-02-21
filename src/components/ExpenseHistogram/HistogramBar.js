import "./HistogramBar.css";

function HistogramBar(props) {
  const { max, value } = props;

  const foreBarStyle = {
    height: `${max !== 0 ? Math.round((value * 100) / max) : 0}%`,
  };

  return (
    <div className="back-bar">
      <div className="fore-bar" style={foreBarStyle}></div>
    </div>
  );
}

export default HistogramBar;
