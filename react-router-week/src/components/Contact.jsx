import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <nav>
                <Link to="/">HOME</Link>
            </nav>
            <h1>Contacto</h1>
            <input type="text" />
            <button>Envíar</button>  
        </div>
    );
};

export default Contact;