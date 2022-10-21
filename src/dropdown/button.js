export const Button = (props) => {
  return <button onClick={() => props.onToggle()}>
    {props.children}
  </button>
}