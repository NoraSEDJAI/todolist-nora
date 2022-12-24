const Button = (props) => {
  const { text } = props;

  return <button {...props}> {text} </button>;
};

export default Button;
