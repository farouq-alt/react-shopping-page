import { useRef } from "react";

function BookForm({ addBook }) {
  const titleRef = useRef();
  const authorRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value.trim();
    const author = authorRef.current.value.trim();

    if (title && author) {
      addBook(title, author);
      titleRef.current.value = "";
      authorRef.current.value = "";
    }
  };

  return (
    <form className="card p-3" onSubmit={handleSubmit}>
      <div className="mb-2">
        <input
          type="text"
          ref={titleRef}
          className="form-control"
          placeholder="Titre du livre"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          ref={authorRef}
          className="form-control"
          placeholder="Auteur"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        ➕ Ajouter
      </button>
    </form>
  );
}

export default BookForm;
