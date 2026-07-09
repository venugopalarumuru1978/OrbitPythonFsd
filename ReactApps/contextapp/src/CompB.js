import { useContext } from "react";
import { TestContext } from "./App";
function CompB()
{
      const [info, setInfo] = useContext(TestContext);
    return(
        <div>
            <h2>This is Comp B</h2>
            <h2>Given Data : {info}</h2>
        </div>
    );
}

export default CompB;