import useHashPage from "./hooks/useHashPage";

function App() {
  const { page } = useHashPage();

  return (
    <>
      <a href="#">Accueil</a>
      <a href="#post">Article</a>
      <a href="#contact">Contact</a>
      <p>Page : {page}</p>
    </>
  );
}

export default App;
