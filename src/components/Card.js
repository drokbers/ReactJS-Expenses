import './Card.css';

function Card(props) {
  const classes = 'card' + ' '+ props.className; 
  //buradaki boslugun  ' Basically calling two seperate classes "card" and "expense-item" .In CSS
  // we can pass two classes in classname .Thats why he used a whitespace in "card " to seperate them while concatinating'
  
  return <div className={classes}>{props.children}</div>;
}

export default Card;