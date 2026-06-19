import { useParams } from "react-router-dom";

function Testparams()
{
    const {sname} = useParams();
    const {loc} = useParams();
    
    return(
        <div>
            <h1>Demo of useParams Hook</h1>
            <h2>Student Name is :  {sname}</h2>
            <h2>Student Location is :  {loc}</h2>
        </div>
    );
}

export default Testparams;