import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ViewStudents()
{
  const [stdinfo, setStdinfo] = useState([]); // array data
  const [chk, setChk] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:3400/student")
    .then((res)=>{
      console.log(res.data);
      setStdinfo(res.data);
    });
  },[chk]);

  const delStudent = (id) =>{
    axios.delete("http://localhost:3400/student/" + id)
    .then((res)=>{
        console.log("Student Deleted...");
        setChk(chk+1);
    })
  }


    return(
        <div>
            <h1 style={{textAlign:"center"}}>All Students Information</h1>
            <hr />
            <p style={{textAlign:"center"}}>
                            <Link to="/reg">New Student</Link>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link to="/viewall">View All Students</Link>
              </p>
             <hr />
            <table width="100%" border="1">
                <thead>
                <tr>
                    <th>Roll Number</th>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Course Fees</th>
                    <th>Operations</th>
                </tr>
                </thead>
                <tbody>
                {
                    stdinfo.map((std)=>(
                        <tr>
                            <td>{std.id}</td>
                            <td>{std.sname}</td>
                            <td>{std.course}</td>
                            <td>{std.fees}</td>
                            <td>
                                <input type="button"  value="Delete" onClick={()=>{delStudent(std.id)}} />

                                &nbsp;&nbsp;&nbsp;

                                <input type="button" value="View" 
                                                onClick={()=>{navigate("/sstd/" + std.id)}} />
                                                         &nbsp;&nbsp;&nbsp;
                                <input type='button'  value="Modify" 
                                                    onClick={()=>{navigate("/smod/" + std.id)}} />
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default ViewStudents;