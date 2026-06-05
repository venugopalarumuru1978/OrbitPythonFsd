import './App.css';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Form1 from './Form1';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        <hr />
        <Routes>
          <Route path="/login" exact Component={Login}/>
          <Route path="/reg" exact Component={Register}/>
          <Route path="/contact" exact Component={Contact}/>
          <Route path="/frm1" exact Component={Form1}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;