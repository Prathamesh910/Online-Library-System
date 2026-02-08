import { useSelector } from "react-redux";

import { Link } from "react-router-dom";



function Home(){


    const books =  useSelector((state) =>  state.books);



    return (

<div className="container">


<h1> Welcome to  our Online Library 📖</h1>

 <h3>Categories</h3>
      <ul>
        <li><Link to="/books/Fiction">Fiction</Link></li>
        <li><Link to="/books/Non-Fiction">Non-Fiction</Link></li>
        <li><Link to="/books/Sci-Fi">Sci-Fi</Link></li>
      </ul>

<h3>Popular Books</h3>

<div className="grid">
{books.slice(0, 2).map((book) => (
          <div key={book.id} className="card">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>



</div>
        ))}
      </div>


</div>


    );
}




export default Home;