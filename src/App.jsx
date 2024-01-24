import useHashPage from "./hooks/useHashPage";
import Home from "./pages/Home";

function App() {
  const { page } = useHashPage();

  return (
    <>
      <a href="#">Accueil</a>
      <a href="#post">Article</a>
      <a href="#contact">Contact</a>
      <p>Page : {page}</p>
      {page === "home" && <Home />}
    </>
  );
}

export default App;
