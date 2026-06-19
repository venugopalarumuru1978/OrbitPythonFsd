import { useParams } from "react-router-dom";

function TestP2()
{
    const {pname}  = useParams();
    return(
        <div>
            <h1>Params 2</h1>
            <h1>Given name : {pname}</h1>
        </div>
    );
}
export default TestP2;