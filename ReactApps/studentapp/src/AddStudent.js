import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function AddStudent()
{
    const [sinfo, setSinfo] = useState({
        "id":0,
        "sname":"",
        "course":"",
        "fees":0.0
    });

    const  addnewstd = () =>{
        console.log(sinfo);
        axios.post("http://localhost:3400/student",sinfo)
        .then((response)=>{
            console.log("New Student is Added....");
        });
    }


    return(
        <div>
            <h1 style={{textAlign:"center"}}>New Student Register</h1>
            <hr />
            <p style={{textAlign:"center"}}>
                <Link to="/reg">New Student</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to="/viewall">View All Students</Link>
            </p>
            <hr />
            <p style={{textAlign:"center"}}>
                <label>Student ID</label><br />
                <input type="text" name="txtSid"
                onChange={(e)=>{setSinfo({...sinfo, id:e.target.value})}} /><br />

                <label>Student Name</label><br />
                <input type="text" name="txtSname"
                onChange={(e)=>{setSinfo({...sinfo, sname:e.target.value})}} /><br />

                <label>Student Course</label><br />
                <input type="text" name="txtScourse" 
                onChange={(e)=>{setSinfo({...sinfo, course:e.target.value})}} /><br />

                <label>Course Fees</label><br />
                <input type="text" name="txtSfees"
                onChange={(e)=>{setSinfo({...sinfo, fees:e.target.value})}} /><br />

                <input type="button"  value="Add Student" onClick={addnewstd} />
            </p>
        </div>
    );
}

export default AddStudent;