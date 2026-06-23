import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SingleStd()
{
    const navigate = useNavigate();
    const {id} = useParams();
    const [std, setStd] = useState({}); // empty json obj

    useEffect(()=>{

        axios.get("http://localhost:3400/student/" + id)
        .then((res)=>{
            console.log(res.data);
            setStd(res.data);
        });
    },[]);

    return(
        <div>
            <h1 style={{textAlign:"center"}}>View Student Information</h1>
            <h2>Roll Number {id}</h2>
            <hr />
                <table width="100%" border="1">
                <thead>
                <tr>
                    <th>Roll Number</th>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Course Fees</th>                    
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{std.id}</td>
                        <td>{std.sname}</td>
                        <td>{std.course}</td>
                        <td>{std.fees}</td>
                    </tr>
                </tbody>
        </table>
            <p style={{textAlign:"center"}}>

                <input type="button"  value="Back" onClick={()=>{navigate("/viewall")}} />

            </p>
        </div>
    );
}

export default  SingleStd;