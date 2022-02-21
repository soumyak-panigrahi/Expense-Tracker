import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return (
    <div className={classes}>
      {props.children}
      {/*children Will Evalute the content within <Card></Card>*/}
    </div>
  );
}

export default Card;
