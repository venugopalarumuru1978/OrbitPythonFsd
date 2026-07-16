import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewAll()
{
    const navigate = useNavigate();
    const [lDetails, setLDetails] = useState('');
    
    useEffect(()=>{
        
        if(sessionStorage.getItem('adInfo')!=null)
        {
            setLDetails(sessionStorage.getItem('adInfo'));
        }
        else
        {
            navigate('/login');
        }
    },[navigate]);


    return(
        <div>
            <h1>Welcome to : {lDetails}</h1>
            <h2>Employee All Page</h2>
        </div>
    );
}

export default ViewAll;