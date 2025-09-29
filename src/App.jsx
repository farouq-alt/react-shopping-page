import { useState, useEffect } from "react";
import BookForm from "./BookForm";
import BookCard from "./BookCard";

function App() {
  const [books, setBooks] = useState([]);

  // Simulation d’une API distante
  useEffect(() => {
    const fakeAPI = [
      { id: 1, title: "1984", author: "George Orwell", rating: 3, liked: false },
      { id: 2, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", rating: 5, liked: true },
    ];
    setBooks(fakeAPI);
  }, []);

  const addBook = (title, author) => {
    const newBook = {
      id: Date.now(),
      title,
      author,
      rating: 0,
      liked: false,
    };
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const toggleLike = (id) => {
    setBooks(
      books.map((b) =>
        b.id === id ? { ...b, liked: !b.liked } : b
      )
    );
  };

  const updateRating = (id, rating) => {
    setBooks(
      books.map((b) =>
        b.id === id ? { ...b, rating } : b
      )
    );
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">📚 Ma Bibliothèque</h1>
      <BookForm addBook={addBook} />
      <div className="row mt-4">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-3">
            <BookCard
              book={book}
              deleteBook={deleteBook}
              toggleLike={toggleLike}
              updateRating={updateRating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
