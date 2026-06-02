import { useState } from "react";

function Contact()
{
    const [x, setX] = useState(0);
    
    function add()
    {
        setX(x+1);
    }

    function sub()
    {
        setX(x-1);
    }

    return(
        <div>
            <h1>Contact Page</h1>
            <h1>X value is {x}</h1>

            <input type="button" value="Increment" onClick={add} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Decrement" onClick={sub}/>
        </div>
    );
}

export default Contact;