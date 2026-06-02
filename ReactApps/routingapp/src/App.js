import './App.css';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;