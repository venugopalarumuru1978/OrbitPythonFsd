import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewStudents()
{
  const [stdinfo, setStdinfo] = useState([]); // array data

  useEffect(()=>{

    axios.get("http://localhost:3400/student")
    .then((res)=>{
      console.log(res.data);
      setStdinfo(res.data);
    });
  },[]);

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
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default ViewStudents;