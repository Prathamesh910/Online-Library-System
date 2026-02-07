import { Link } from "react-router-dom";



function Navbar(){


    return(
<nav className="navbar">


<h2>📚 Online Library</h2>


 <div>
        <Link to="/">Home</Link>
        <Link to="/books/Fiction">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
</nav>

    );

}



export default Navbar;