import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

export default function Home() {
  const { data, errors, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=7&_delay=6000"
  );

  const arr = [];

  if (errors) {
    return <p>Errors : {errors.toString()} </p>;
  }

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      {data &&
        JSON.stringify(
          data.map((e) =>
            arr.push(
              <Card
                title={e.title}
                body={e.body}
                key={e.id}
                img={`https://picsum.photos/id/4${e.id}/150`}
                href={`#post:${e.id}`}
              />
            )
          )
        )}
      {arr}
    </>
  );
}
