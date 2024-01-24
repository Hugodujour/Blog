import useFetch from "../hooks/useFetch";

export default function Home() {
  const { data, errors, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=9000"
  );

  return (
    <>
      {errors && <p>Errors : {errors.toString()} </p>}
      {loading && <p>Chargement...</p>}
      {data && JSON.stringify(data)}
    </>
  );
}
