import { Modal } from "../../components/Modal";

export default function EditPostModal({ post, onClose, onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal onClose={onClose}>
      <h1>Éditer l'article</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input name="title" label="Titre" defaultValue={post.title} />
        <Input
          name="title"
          label="Contenu"
          type="textarea"
          defaultValue={post.body}
        />
      </form>
    </Modal>
  );
}

export function Input({ name, label, type, defaultValue }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      {type === "textarea" ? (
        <textarea value={defaultValue} name={name} type={type} />
      ) : (
        <input value={defaultValue} name={name} type={type} />
      )}
    </div>
  );
}
