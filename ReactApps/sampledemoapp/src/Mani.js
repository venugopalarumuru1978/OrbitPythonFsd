import { useState } from "react";

function Mani()
{

    const [cname, setCname] = useState('');
    const [res, setRes] = useState('');

    return(
        <div>
        <p style={{textAlign:"center"}}>
            <label>City Names</label><br />
            <select name="ddlCity" onChange={(e)=>{setCname(e.target.value)}}>
                <option value="-1">Select City</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Amaravathi">Amaravathi</option>
                <option value="Bangalore">Bangalore</option>
            </select>
            &nbsp;&nbsp;
            <input type="button"  value="Click Me" onClick={()=>{setRes(cname)}} />
        
            <br /><br />
            <h2>Ur City is {res}</h2>
        </p>
        </div>
    );
}

export default Mani;