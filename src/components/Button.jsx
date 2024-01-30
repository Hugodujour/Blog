export default function Button({ ...props }) {
  const newProps = { ...props };
  return <button {...newProps} />;
}
