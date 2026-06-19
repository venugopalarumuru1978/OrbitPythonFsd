import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TestP1()
{
    const [sna, setSna] = useState('');
    const navigate = useNavigate();

    const SendData= ()=>{
        navigate('/p2/' + sna);
    }
    return(
        <div>
            <h1>Params 1</h1>
            <label>Enter ur Name</label>
            <br />
            <input type="text" name="txtName"
                onChange={(e)=>{setSna(e.target.value)}} />
            <br /><br />
 <input type="button" value='Click Me' onClick={SendData} />
        </div>
    );
}
export default TestP1;