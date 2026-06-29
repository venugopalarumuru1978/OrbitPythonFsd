import { useState } from "react";

function Login()
{
    const [uname,setUname] = useState('');
    const [pwd,setPwd] = useState('');
    const [info,setinfo] = useState('');
    const [errors, setErrors] = useState({});

    const Validations = () =>{
        let errinfo = {};
        let flag = true;

        if(uname==="")
        {
            errinfo.uErr = "Username must be required";
            flag = false;
        }

        if(pwd==="")
        {
            errinfo.pErr = "Password must be required";
            flag = false;
        }

        setErrors(errinfo);

        return flag;
    }

    const LoginCheck = (e)=>{
        e.preventDefault();
        if(Validations() === true)
        {
            if(uname==="Venugopal"  &&  pwd==="v@123")
                setinfo('User details are correct');
            else
                setinfo('User details are incorrect');
        }

    }

    return(
        <div>
            <h1>Login Page</h1>
            <br />
            <form name="loginFrm" method="post" onSubmit={LoginCheck}>
                <p>
                    <label>Username</label>
                    <br />
                    <input type="text" name="txtUser" onChange={(e)=>{setUname(e.target.value)}} />
                    <p style={{color:"red"}}>{errors.uErr}</p>
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="text" name="txtPwd" onChange={(e)=>{setPwd(e.target.value)}} />
                    <p style={{color:"red"}}>{errors.pErr}</p>
                    <br />  <br />
                    <input type="submit"  value="Login Here" />
                </p>
            </form>
            <h3>{info}</h3>
        </div> 
    );
}

export default Login;