
import { Link, Outlet, Router } from "react-router-dom";
import "./Nav.css";
export default function Nav()
{
    return(
        <>
        <div className="Navigation">
            <div className="navPic">

            </div>
            <div className="navLinks">
                {/* <Router> */}
                <div><Link to="/">Home</Link></div>
                <div>Books</div>
                <div>AddBook</div>
                {/* <Link to="/login">Hello</Link> */}
                <div><Link to="/login">Login</Link></div>
                <div><Link to="/register">Registration</Link></div>
                {/* </Router> */}
            </div>
            
        </div>
        <Outlet/>
        </>
    );
}