import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Harsha from './Harsha';
import Mani from './Mani';
import SaiTeja from './SaiTeja';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
        <h1>This is React</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/lnk1"  exact Component={Harsha} />
            <Route path="/lnk2"  exact Component={SaiTeja} />
            <Route path="/lnk3"  exact Component={Mani} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
