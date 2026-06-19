import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Harsha from './Harsha';
import Mani from './Mani';
import SaiTeja from './SaiTeja';
import Navbar from './Navbar';
import Child1 from './Child1';
import TestClass from './TestClass';
import TestPage from './TestPage';

function App() {

  let sname = "Pavan Kumar";
  let age =30;


  return (
    <div className="App">
        <h1>This is React</h1>

        <Child1  sname={sname} age={age}/>

        <TestClass />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/lnk1"  exact Component={Harsha} />
            <Route path="/lnk2"  exact Component={SaiTeja} />
            <Route path="/lnk3"  exact Component={Mani} />
            <Route path="/tpage" exact Component={TestPage} />
          </Routes>
        </BrowserRouter>

    
    </div>
  );
}

export default App;
