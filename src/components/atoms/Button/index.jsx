export default function Button(props) {
  return <button className={`h-10 px-6 font-semibold ${props.buttonClassname}`}>{props.children}</button>;
}
