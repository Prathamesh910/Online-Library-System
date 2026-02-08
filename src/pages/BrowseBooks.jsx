import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BrowseBooks() {
  const { category } = useParams();

  const books = useSelector((state) => state.books);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category
      ? book.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      <h2>{category ? `${category} Books` : "All Books"}</h2>

      <input
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />



{filteredBooks.length === 0 && <p>No books found</p>}



      {filteredBooks.map((book) => (
        <div key={book.id} className="card">
          <h4>{book.title}</h4>
          <p>{book.author}</p>
          <p><small>{book.category}</small></p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}





export default BrowseBooks;
