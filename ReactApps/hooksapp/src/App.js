import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Welcome from './Welcome';
import Register from './Register';
import Testparams from './Testparams';
import TestP1 from './TestP1';
import TestP2 from './TestP2';
import TestEffect from './TestEffect';

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <BrowserRouter>
      <Routes>
        <Route  path="/"  exact Component={Login} />
        <Route  path="/login"  exact Component={Login} />
        <Route  path="/welcome"  exact Component={Welcome} />
        <Route  path="/reg"  exact Component={Register} />
        <Route  path="/test/:sname/:loc"  exact Component={Testparams} />
      <Route  path="/p1"  exact Component={TestP1} />
      <Route  path="/p2/:pname"  exact Component={TestP2} />
      <Route  path="/tf"  exact Component={TestEffect} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
