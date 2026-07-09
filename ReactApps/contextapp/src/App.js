import { createContext, useState } from 'react';
import './App.css';
import CompA from './CompA';
import CompB from './CompB';
import Addprd from './Addprd';
import ShowPrd from './ShowPrd';
export const TestContext = createContext();
export const onlineStore = createContext();
function App() {
  const [info, setInfo] = useState('Hello, World, this is contexing');

   const [shop, setShop] = useState([
    {
      brandName:"Nokia", stock:30
    },
    {
      brandName:"Samsung", stock:40
    },
    {
      brandName:"OnePlus", stock:10
    }
  ]);

  return (
    <div>
     <h1 style={{textAlign:"center"}}>This is Context App</h1>
     <TestContext.Provider value={[info, setInfo]}>
      <p style={{textAlign:"center"}}>
      <CompA />
      <CompB />
      </p>
     </TestContext.Provider>

     <hr />

     <onlineStore.Provider  value={[shop, setShop]}>
      <table width="100%">
        <tr>
          <td style={{textAlign:"left"}}>
            <ShowPrd />
          </td>
        </tr>
        <tr>
          <td style={{textAlign:"center"}}>
        <Addprd />
          </td>
        </tr>
      </table>
     </onlineStore.Provider>
    </div>
  );
}

export default App;
