import { Link } from "react-router-dom";

function NavBarAdmin()
{
    return(
        <div>
            <p style={{textAlign:"center"}}>
                <Link to="/empreg">Register</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/viewall">All Employees</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/lout">Logout</Link>
            </p>
        </div>
    );
}

export default NavBarAdmin;