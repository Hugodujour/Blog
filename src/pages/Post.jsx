import useFetch from "../hooks/useFetch";
import Article from "../components/Article";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Button from "../components/Button";
import useToggle from "../hooks/useToggle";
import { Modal } from "../components/Modal";
import EditPostModal from "./Post/EditPostModal";

export default function Post({ param }) {
  const { data, errors, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${param}`
  );
  useDocumentTitle(data?.title);
  const [isEditing, toggleEditing] = useToggle(false);
  const arr = [];

  if (errors) {
    return errors.toString();
  }

  if (loading) {
    return "Chargement...";
  }

  return (
    <>
      {data &&
        JSON.stringify(
          arr.push(
            <Article
              src={`https://picsum.photos/id/4${data.id}/500/300`}
              title={data.title}
              body={data.body}
            />
          )
        )}
      {isEditing && <EditPostModal post={data} onClose={toggleEditing} />}
      {arr}
      <Button onClick={toggleEditing}>Éditer l'article</Button>
      <a href={`#post:${data.id + 1}`}>Article suivant</a>
    </>
  );
}
