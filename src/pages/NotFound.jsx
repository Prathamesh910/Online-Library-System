import { Link, useLocation } from "react-router-dom";



function NotFound() {
    
    const location =  useLocation();


    return (
<div className="container">
      <h2>404 - Page Not Found</h2>
      <p>Invalid URL: {location.pathname}</p>
      <Link to="/">Go Back Home</Link>
    
    
    </div>
    );
}




export default  NotFound;