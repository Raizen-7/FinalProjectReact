import React from 'react';
import { useParams } from 'react-router-dom';

const Team = () => {

    const { name } = useParams();

    return (
        <div className='Team'>
            <h1>Este es un nuevo equipo</h1>
            <h2>Hello {name} Welcome </h2>
        </div>
    );
};

export default Team;