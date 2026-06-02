import { useState } from "react";

function Register()
{

    const [sname, setSname] = useState('Kiran');


    return(
        <div>
            <h1>Register Page</h1>
            <h1>Student Name : {sname}</h1>
            <input type="text"  name="txtSname" 
placeholder="Enter ur name" onChange={(e)=>{setSname(e.target.value)}} />
        </div>
    );
}

export default Register;