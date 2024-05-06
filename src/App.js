import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { ProjectDetails } from "./components/ProjectDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects/:title' element={<ProjectDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
