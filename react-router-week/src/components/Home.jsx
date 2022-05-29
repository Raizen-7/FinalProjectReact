import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="App">
            <nav>
            <Link to="/Contact">Contanto</Link>
            <Link to="/About">About ME</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Tecnologies">Tecnologies</Link>
            </nav>
            <h1>Ruta Principal</h1>

        </div>
    );
};

export default Home;    <h1>Ruta Principal</h1>