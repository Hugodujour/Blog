import useHashPage from "./hooks/useHashPage";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  const { page, param } = useHashPage();

  return (
    <>
      <a href="#">Accueil</a>
      <a href="#post">Article</a>
      <a href="#contact">Contact</a>
      <p>Page : {page}</p>
      {page === "home" && <Home />}
      {page === `post` && <Post param={param} />}
    </>
  );
}

export default App;
