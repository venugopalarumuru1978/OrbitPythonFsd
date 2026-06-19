import { useState } from "react";

function Harsha()
{
    const [res, setRes] = useState('');
    const [bval, setBval] = useState('');

    const bankProcess = (e)=>{
        setBval(e.target.value);
     }

     const btnClick = () =>{
        if(bval==="cc")
            setRes('Ur payment using Credit Card');
        if(bval==="dc")
            setRes('Ur payment using Debit Card');
        if(bval==="nb")
            setRes('Ur payment using Net Banking');
     }

    return(
        <div>
                <h1>Radio Buttons</h1>
                <input type="radio"  value="cc" name="rdoBank" onChange={bankProcess} />
                <label>Credit Card</label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio"  value="dc" name="rdoBank" onChange={bankProcess} />
                <label>Debit Card</label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio"  value="nb" name="rdoBank" onChange={bankProcess} />
                <label>Net Banking</label>
                <br />
            <input type="button" value="Click me" onClick={btnClick} />
                <br />
                <h2>{res}</h2>           

                
        </div>
    );
}

export default Harsha;