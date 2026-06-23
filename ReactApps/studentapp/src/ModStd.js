import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ModStd()
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
            <h1 style={{textAlign:'center'}}>Modify Student</h1>
            <hr />
        <h2>Roll Number : {id}</h2>        

            <p style={{textAlign:"center"}}>
                <label>Student ID</label><br />
                <input type="text" name="txtSid" value={std.id}
                onChange={(e)=>{setStd({...std, id:e.target.value})}} /><br />

                <label>Student Name</label><br />
                <input type="text" name="txtSname" value={std.sname}
                onChange={(e)=>{setStd({...std, sname:e.target.value})}} /><br />

                <label>Student Course</label><br />
                <input type="text" name="txtScourse" value={std.course}
                onChange={(e)=>{setStd({...std, course:e.target.value})}} /><br />

                <label>Course Fees</label><br />
                <input type="text" name="txtSfees" value={std.fees}
                onChange={(e)=>{setStd({...std, fees:e.target.value})}} /><br />

                <input type="button"  value="Modify Student" />  &nbsp;&nbsp;
                                <input type="button" value="Back" 
                            onClick={()=>{navigate("/viewall")}} />

            </p>

        </div>
    );
}

export default ModStd;