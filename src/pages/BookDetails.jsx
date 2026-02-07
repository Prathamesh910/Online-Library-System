import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";


function BookDetails(){


    const { id } = useParams();
  const book = useSelector((state) =>

    state.books.find((b)  =>  b.id  === Number(id)));




if (!book) return <p>Book not found</p>;

return (



<div className="container">
      <h2>{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p>{book.description}</p>
      <p>⭐ {book.rating}</p>

      <Link to={`/books/${book.category}`}>Back to Browse</Link>



    </div>
);






}



export default BookDetails;
