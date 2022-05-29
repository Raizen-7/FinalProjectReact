import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Tecnologies from './components/Tecnologies';

function App() {
  return (
    <HashRouter>
      <nav>navegacion</nav>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/projects' element={<Projects/>}/>
        <Route  path='/tecnologies' element={<Tecnologies/>}/>
      </Routes>
      <footer>pie de pagina</footer>
    </HashRouter>

  );
}

export default App;
