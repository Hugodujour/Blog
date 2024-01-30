export default function Article({ src, title, body }) {
  return (
    <div>
      <img src={src} />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
