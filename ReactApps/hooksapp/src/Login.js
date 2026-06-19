import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login()
{
    const [uname, setUname] = useState('');
    const [pwd, setPwd] = useState('');
    const [info, setInfo] = useState('');
    const navigate = useNavigate();

    const LoginCheck = () =>{
        if(uname==="Venugopal" && pwd==="v@123")
            navigate('/welcome');
        else
            setInfo('Please check username / password');
    }

    return(
        <div>







            
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-6" style={{textAlign:"left"}}>
                                    <b>Login Here  </b>
                                </div>
                                <div className="col-md-6" style={{textAlign:"right"}}>
                                    <Link to="/reg">Register</Link>
                                </div>
                            </div>                            
                        </div>
                        <div className="card-body">
                         <label>Username</label>
                        <input type="text" name="txtUser" className="form-control"
                        onChange={(e)=>{setUname(e.target.value)}} />

                        <br />
                         <label>Password</label>
            <input type="password" name="txtPwd" className="form-control" 
                    onChange={(e)=>{setPwd(e.target.value)}} />

<br />
      <input type="button" value="Submit" className="btn btn-primary"
                        onClick={LoginCheck} />

            <h2>{info}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>      
        </div>
    );
}

export default Login;