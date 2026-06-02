import { Link } from "react-router-dom";

function NavBar()
{

    return(
        <div>
            <p style={{textAlign:"center"}}>
                <Link to="/login">Login</Link>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to="/reg">Register</Link>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to="/contact">Contact</Link>
            </p>
        </div>
    );
}

export default NavBar;