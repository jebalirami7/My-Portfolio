import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { ProjectDetails } from "./components/ProjectDetails";
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Analytics />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/projects/:id' element={<ProjectDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
