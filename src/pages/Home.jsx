import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

export default function Home() {
  const { data, errors, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000"
  );

  const arr = [];

  return (
    <>
      {errors && <p>Errors : {errors.toString()} </p>}
      {loading && <p>Chargement...</p>}
      {data &&
        JSON.stringify(
          data.map((e) =>
            arr.push(
              <Card title={e.title} body={e.body} id={e.id} key={e.id} />
            )
          )
        )}
      {arr}
    </>
  );
}
