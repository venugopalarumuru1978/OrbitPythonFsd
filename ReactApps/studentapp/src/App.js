
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewStudents from './ViewStudents';
import AddStudent from './AddStudent';
import SingleStd from './SingleStd';
import ModStd from './ModStd';
function App() {
 return (
    <div>
      <img src='pic1.png'  width="100%" height="200px" alt="None" />
      <hr />
            <BrowserRouter>
              <Routes>
                <Route path="/" exact Component={ViewStudents} />
                <Route path="/reg" exact Component={AddStudent} />
                <Route path="/viewall" exact Component={ViewStudents} />
                <Route path="/sstd/:id" exact Component={SingleStd} />
                <Route path="/smod/:id" exact Component={ModStd} />
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;