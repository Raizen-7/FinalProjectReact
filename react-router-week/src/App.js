import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Tecnologies from './components/Tecnologies';
import Team from './components/Team';

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/About">About ME</Link>
        <Link to="/Contact">Contanto</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Tecnologies">Tecnologies</Link>
      </nav>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/projects' element={<Projects/>}/>
        <Route  path='/tecnologies' element={<Tecnologies/>}/>
        <Route  path='/Team/:name' element={<Team/>}/>
        <Route  path='/projects/:projects' element={<Projects/>}/>
      </Routes>
      <footer><h2>Pie de pagina</h2></footer>
    </HashRouter>

  );
}

export default App;
