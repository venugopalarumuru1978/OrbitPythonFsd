import { useState } from "react";

function Register()
{
    const [pname, setPname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors]= useState({});
    const [info, setInfo] = useState('');

    const RegValidations = () =>{
        let errors = {}
        let flag = true;

        let plength = phone.length;

        if(plength!==10)
        {
            errors.phErr = "Phone Number must be 10 digits";
            flag = false;
        }
        setErrors(errors);
        return flag;       
    }

    const RegisterPerson = (e) =>{
        e.preventDefault();
        if(RegValidations()===true)
        {
            setInfo('All values are Correct');
        }
    }

    return(
        <div>
            <h1>Register Page</h1>
            <form name="frmReg" method="post" onSubmit={RegisterPerson}>
            <label>Person Name</label>
            <br />
            <input type="text" name="txtPname" 
            onChange={(e)=>{setPname(e.target.value)}} required/>
            <br />
            <label>Phone Number</label><br />
            <input type="text" name="txtPh" 
            onChange={(e)=>{setPhone(e.target.value)}} required />
            <p style={{textAlign:"center",color:"red"}}>{errors.phErr}</p>
            <br />
            <label>Email</label><br />
            <input type="email" name="txtEmail" 
            onChange={(e)=>{setEmail(e.target.value)}} required />
            <br />
            <input type="submit"  value="Regiter" />

            <input type="reset"  value="Reset" />
            </form>
            <h1>{info}</h1>
        </div>
    );
}

export default Register;