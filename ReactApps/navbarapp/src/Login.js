import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props)
{
    const [uname, setUname] = useState('');
    const [pwd, setPwd] = useState('');
    const [info, setInfo] = useState('');
    const navigate = useNavigate();

    const LoginCheck = () =>{
        if(uname==="Admin" && pwd==="a@123")
        {
            props.setLoginstatus("admin");
            sessionStorage.setItem("adInfo", "Administrator");
            navigate("/viewall");
        }
        else if(uname==="Venugopal" && pwd==="v@123")
        {
            sessionStorage.setItem("empInfo", uname);
            props.setLoginstatus("emp");
            navigate("/empone");
        }            
        else
            setInfo('Please check username / password');
    }

    return(
        <div>
            <h1>Login Page</h1>
            <label>Username</label><br />
            <input type="text" name="txtUser" className="form-control"
             onChange={(e)=>{setUname(e.target.value)}} />

                        <br />
            <label>Password</label><br />
            <input type="password" name="txtPwd" className="form-control" 
             onChange={(e)=>{setPwd(e.target.value)}} />
            <br />
          <input type="button" value="Submit" className="btn btn-primary"
           onClick={LoginCheck} />

            <h2>{info}</h2>

        </div>
    );
}

export default Login;