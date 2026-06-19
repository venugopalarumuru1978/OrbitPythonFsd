import { useEffect, useState } from "react";

function TestEffect()
{
    const [x, setX] = useState(0);
    const [str, setStr] = useState('');
    
    useEffect(()=>{
        if(str==='')
            setStr('This is Orbit');
        else
            setStr('This is React app');
    }, [x]);  


    return(
        <div>
            <h1>Example of useEffect Hook</h1>
            <h1>String value is : {str}</h1>
            <h2>X value is : {x}</h2>
            <input type="button" value="Click Me"
             onClick={()=>{setX(x+1)}} />
        </div>
    );
}

export default TestEffect;