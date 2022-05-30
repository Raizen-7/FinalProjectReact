import React from 'react';
import { useParams } from 'react-router-dom';

const Projets = () => {

    const { projects } = useParams();

    return (

        <div className='Projets'>
           <h1>Titulos </h1>
           <p>Descripción del proyecto {projects} </p>
        </div>

    );
};

export default Projets;