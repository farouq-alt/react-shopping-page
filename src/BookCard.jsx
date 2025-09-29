import { FaTrash, FaHeart, FaStar } from "react-icons/fa";

function BookCard({ book, deleteBook, toggleLike, updateRating }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>

        {/* Étoiles de notation */}
        <div className="mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              onClick={() => updateRating(book.id, star)}
              style={{
                cursor: "pointer",
                color: star <= book.rating ? "gold" : "lightgray",
              }}
            />
          ))}
        </div>
      </div>

      <div className="card-footer d-flex justify-content-between">
        {/* Like */}
        <FaHeart
          onClick={() => toggleLike(book.id)}
          style={{
            cursor: "pointer",
            color: book.liked ? "red" : "gray",
          }}
        />

        {/* Supprimer */}
        <FaTrash
          onClick={() => deleteBook(book.id)}
          style={{ cursor: "pointer", color: "darkred" }}
        />
      </div>
    </div>
  );
}

export default BookCard;
