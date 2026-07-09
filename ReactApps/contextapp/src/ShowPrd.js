import { useContext } from "react";
import { onlineStore } from "./App";
function ShowPrd()
{
    const [shop, setShop] = useContext(onlineStore);
    return(
        <div>
            
            <h1>No of Products : {shop.length}</h1>
        </div>
    );
}

export default ShowPrd;