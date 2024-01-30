export default function Card({ title, body, img, href }) {
  return (
    <a
      style={{
        textDecoration: "none",
        outline: "none",
        color: "black",
        maxWidth: "800px",
      }}
      href={href}
      className="d-flex p-5"
    >
      <div className="justify-content-start">
        <img src={img} />
      </div>
      <div className="flex-column justify-content-start ps-5">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="d-flex justify-content-between">
          <p>Date</p>
          <p>Auteur</p>
        </div>
        <div>
          <p>{body}...</p>
        </div>
      </div>
    </a>
  );
}
