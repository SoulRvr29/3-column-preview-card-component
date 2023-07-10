import Button from "./Button.jsx";
const Card = (props) => {
  return (
    <div className={`card ${props.title}`}>
      <img src={props.icon} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Button />
    </div>
  );
};

export default Card;
