import { Link } from "react-router-dom";

function Navbar()
{
    return(
        <div>
            <p style={{textAlign:"center"}}>
                <Link to="/lnk1">Harsha</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/lnk2">Sai</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/lnk3">Mani</Link>
            </p>
        </div>
    );
}

export default Navbar;