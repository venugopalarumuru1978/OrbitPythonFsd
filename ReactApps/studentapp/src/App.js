
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewStudents from './ViewStudents';
import AddStudent from './AddStudent';
function App() {
 return (
    <div>
            <BrowserRouter>
              <Routes>
                <Route path="/reg" exact Component={AddStudent} />
                <Route path="/viewall" exact Component={ViewStudents} />
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;