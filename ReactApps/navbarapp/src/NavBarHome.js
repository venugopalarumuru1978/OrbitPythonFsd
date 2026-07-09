import { Link } from "react-router-dom";

function NavBarHome()
{
    return(
        <div>
            <p style={{textAlign:"center"}}>
                <Link to="/home">Home</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/login">Login</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/contact">Contact</Link>
            </p>
        </div>
    );
}

export default NavBarHome;