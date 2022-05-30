import React from 'react';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
    
    const navigate = useNavigate();
    
    return (
        <div className='Contact'>
            <h1>Contacto</h1>
            <button onClick={ () => navigate(-1) }> Volver </button>
            <input type="pass" />
            <button>Envíar</button>  
        </div>
    );
};

export default Contact;