import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import EmpReg from './EmpReg';
import ViewAll from './ViewAll';
import NavBarHome from './NavBarHome';
import NavBarAdmin from './NavBarAdmin';
import { useState } from 'react';
import Logout from './Logout';
import EmpOne from './EmpOne';
import ChangePwd from './ChangePwd';
import NavBarEmp from './NavBarEmp';

function App() 
{
  const [loginStatus, setLoginstatus] = useState('gen');
  return (
    <div className="App">
      <BrowserRouter>
      {loginStatus==="gen" ? (<NavBarHome />) : loginStatus==="admin" ? (<NavBarAdmin />) : loginStatus==="emp" ?(<NavBarEmp />) : ""}
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/home" exact Component={Home} />
        <Route path="/login" element={<Login setLoginstatus={setLoginstatus}></Login>} />
        <Route path="/contact" exact Component={Contact} />
        <Route path="/empreg" exact Component={EmpReg} />
        <Route path="/viewall" exact Component={ViewAll} />
        <Route path="/empone" exact Component={EmpOne} />
        <Route path="/cpwd" exact Component={ChangePwd} />
        <Route path="/lout" element={<Logout setLoginstatus={setLoginstatus}></Logout>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
