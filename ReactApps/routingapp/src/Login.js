import { useState } from "react";

function Login()
{

    const [x, setX] = useState(0);
/*
    const Add = () =>{
        setX(x+1);
    }

   const Sub = () =>{
        setX(x-1);
    }
*/
    return(
        <div>
            <h1>Login Page</h1>
            <h1>X value is {x}</h1>

            <input type="button" value="Increment" onClick={()=>{setX(x+1)}} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Decrement" onClick={()=>{setX(x-1)}}/>

        </div>
    );
}

export default Login;