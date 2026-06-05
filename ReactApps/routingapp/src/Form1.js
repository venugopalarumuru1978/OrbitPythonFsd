import { useState } from "react";

function Form1()
{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [result, setResult] = useState('');

    const Addition = ()=>{
        let sum = parseFloat(x)+ parseFloat(y);
        let res = x + ' and ' + y + ' addition is ' + sum;
        setResult(res);
    }

    return(
        <div>
            <label>Value-1</label> &nbsp;&nbsp;
    <input type="text"  name="txtVal1" placeholder="Value-1" onChange={(e)=>{setX(e.target.value)}} />
            <br />
            <br />
            <label>Value-2</label>&nbsp;&nbsp;
            <input type="text"  name="txtVal2" placeholder="Value-2" onChange={(e)=>{setY(e.target.value)}} />            
            <br /><br />
            <input type="button"  value='Addition'  onClick={Addition} />

            <br />
            <h2>{result}</h2>
        </div>
    );
}

export default Form1;