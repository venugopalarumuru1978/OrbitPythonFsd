import { Link } from "react-router-dom";

function NavBarEmp()
{

    return(
        <div>
            <p style={{textAlign:"center"}}>
                <Link to="/empone">Emp Information</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/cpwd">Change Password</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/lout">Logout</Link>
            </p>
        </div>
    );
}

export default NavBarEmp;