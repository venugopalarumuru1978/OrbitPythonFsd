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
    },[id]);

    const UpdateStd = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:3400/student/" + id, std)
        .then((res)=>{
            navigate("/viewall");
        });
    }

    return(
        <div>
            <h1 style={{textAlign:'center'}}>Modify Student</h1>
            <hr />
            <form method="post" onSubmit={UpdateStd}>
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
<br />
                <input type="submit"  value="Modify Student" className="btn btn-primary" />  &nbsp;&nbsp;

                <input type="button" value="Back" className="btn btn-warning" onClick={()=>{navigate("/viewall")}} />                
            </p>
            </form>
                    </div>
    );
}

export default ModStd;