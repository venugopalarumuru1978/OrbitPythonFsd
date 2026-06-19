import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome()
{
    const navigate = useNavigate();
    const [fruits, setF] = useState(["Mango","Banana"]);
    const [sweets, setS] = useState(["Laddu", "Badam"]);    

    const testFun = () =>{        
        console.log(fruits);
        console.log(sweets);
        setF(...fruits, ...sweets);
        console.log(sweets);
    }

    return(
        <div>
            <h2>Welcome to Admin &nbsp;&nbsp;|&nbsp;&nbsp;

                <input type="button"  value="Logout" 
                onClick={()=>{navigate('/login')}} />
            </h2>
            <hr />
            <input type="button"  value="Click Me" onClick={testFun}/>
        </div>
    );
}

export default Welcome;