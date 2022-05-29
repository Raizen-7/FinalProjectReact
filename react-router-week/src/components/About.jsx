import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <nav>
            <Link to="/">HOME</Link>
            </nav>
            <h1>Sobre Me...</h1>
           <p>practicante FrontEnd</p>
        </div>
    );
};

export default About;