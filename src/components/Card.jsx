export default function Card({ title, body, id }) {
  return (
    <div className="d-flex p-5" style={{ width: "800px" }} key={id}>
      <div className="justify-content-start">
        <img src="https://picsum.photos/150" />
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
    </div>
  );
}
