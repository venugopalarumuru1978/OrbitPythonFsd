import { useNavigate } from "react-router-dom";
import Child2 from "./Child2";

function Child1(props)
{
    let ename = "Kiran Kumar";
    let salary = 30000;

    const navigate = useNavigate();


  const demo = ()=>{
    navigate('/tpage');
  }


    return(
    <div>
        <h1>Child Component</h1>
        <h2>Student Name {props.sname}</h2>
        <h2>Age : {props.age}</h2>

        <Child2 ename={ename}  salary = {salary} />

        <input type="button" value="Click Me" onClick={demo} />
    </div>
);
}

export default Child1;
