import './App.css';
import Data from './Data';
import TableData from './TableData';
import Test1 from './Test1';
import Test2 from './Test2';

function App() {
  return (
    <div className="App">
      <img src='Pic3.jpg' width='100%' height='200px' alt='None' />
      <h1>Hello World</h1>
     <table width="100%" border='1'>
      <tr>
        <td>
          <Test1 />
        </td>
        <td>
          <Test2 />
        </td>
      </tr>


      <tr>
        <td colSpan={2}>
          <Data />
        </td>
      </tr>

    <tr>
        <td colSpan={2}>
          <TableData />
        </td>
      </tr>

     </table>
    </div>
  );
}

export default App;
