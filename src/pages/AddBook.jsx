import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(book).some((val) => val === "")) {
      alert("All fields are required");
      return;
    }

    dispatch(addBook({ ...book, id: Date.now() }));
    navigate(`/books/${book.category}`);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Add New Book</h2>

      {Object.keys(book).map((key) => (
        <input
          key={key}
          placeholder={key}
          value={book[key]}
          onChange={(e) => setBook({ ...book, [key]: e.target.value })}
        />
      ))}

      <button type="submit">Add book</button>
    </form>
  );
}

export default AddBook;
