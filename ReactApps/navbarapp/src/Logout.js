import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props)
{
    const navigate = useNavigate();
    const [x, setX] = useState(0);
    useEffect(()=>{
        sessionStorage.removeItem('adInfo');
        props.setLoginstatus("gen");
        navigate('/login');
    },[]);

    return(
        <div>
            <h1>Logout</h1>
            
        </div>
    );
}

export default Logout;