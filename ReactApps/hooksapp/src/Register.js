import { useState } from "react";

function Register()
{

    const [stdinfo, setStdinfo] = useState({
        "rno":0, 
        "sname":"",
        "course":"",
        "fees":0.0
    });

    return(
        <div>
            <label>Roll Number </label><br />
            <input type="text" name="txtRno" 
       onChange={(e)=>{setStdinfo({...stdinfo,rno:e.target.value})}} />
            <br /><br />
            <label>Student Name </label><br />
            <input type="text" name="txtSname"
            onChange={(e)=>{setStdinfo({...stdinfo,sname:e.target.value})}} />
            <br /><br />
            <label>Course </label><br />
 <select name="ddlCourse" 
 onChange={(e)=>{setStdinfo({...stdinfo,course:e.target.value})}}>
                <option value="-1">Course</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="Sql">SQL</option>
            </select>
            <br /><br />
            <label>Course Fees</label><br />
            <input type="text" name="txtFees" 
            onChange={(e)=>{setStdinfo({...stdinfo,fees:e.target.value})}} />
            <br /><br />

        <input type="button"  value="Register" />

        <h1>{
            <p>{stdinfo.rno}<br />
            {stdinfo.sname}<br />
            {stdinfo.course}<br />
            {stdinfo.fees}</p>
            }</h1>
        </div>
    );

}

export default Register;