import { useContext, useState } from "react";
import { onlineStore } from "./App";

function Addprd()
{
    const [shop, setShop] = useContext(onlineStore);
    const [bname, setBname] = useState('');
    const [stock, setStock] = useState(0);

    const addItem = () =>{
        setShop([...shop,{brandName:bname, stock:stock}]);
    }



    return(
        <div>            
            <table width="100%" border={1}>
                <tr>
                    <th>Brand Name</th>
                    <th>Stock</th>
                </tr>
                {
                    shop.map((s)=>(
                        <tr>
                            <td>{s.brandName}</td>
                            <td>{s.stock}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td colSpan={2}>
                <input type="text" placeholder="Enter Brand Name" 
                onChange={(e)=>{setBname(e.target.value)}} />
                <input type="text" placeholder="Enter Stock" 
                onChange={(e)=>{setStock(e.target.value)}} />

                <input type="button" value="Add Product Info"  
                 onClick={addItem} />

                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Addprd;