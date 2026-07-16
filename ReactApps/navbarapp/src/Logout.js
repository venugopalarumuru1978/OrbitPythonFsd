import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props)
{
    const navigate = useNavigate();
    
    useEffect(()=>{
        sessionStorage.removeItem('adInfo');
        props.setLoginstatus("gen");
        navigate('/login');
    },[navigate, props]);

    return(
        <div>
            <h1>Logout</h1>
            
        </div>
    );
}

export default Logout;