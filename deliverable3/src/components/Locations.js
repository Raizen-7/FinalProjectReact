import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Residents from './Residents';

const Locations = () => {
    //Hook de control de estados de la localización obtenida de la API.
    const [locations, setLocation] = useState({});

    const [id, setId] = useState("");

    
    //Hook controlador de bucles dependiendo de las dependencias incertadas en el arreglo.
    useEffect(()=>{
        // Contante que guarda los ID consultados de forma aleatorioa desde la API
        const random = Math.floor(Math.random() * 126 ) + 1;
        //
        axios.get(`https://rickandmortyapi.com/api/location/${random}/`).then((res)=> setLocation(res.data));
    },[]);

    // console.log(locations);
    // console.log(id)

    const searchLocations = () =>{
       
        if( id <= 126 ){
        axios.get(`https://rickandmortyapi.com/api/location/${id}/`).then((res)=> setLocation(res.data));
        }else{
            alert("This only have 126 id to show")
        }

    };


    return (
        <div>
            <h1>{locations.name}</h1>
            <div className='This'>
            <p>Type: {locations.type}</p>
            <p>Dimension : {locations.dimension}</p>
            <p>Population: {locations.residents?.length}</p>
            </div>
            <div>
                <input  type="number"
                        onChange={(e) => setId(e.target.value)} 
                        value={id} 
                />
                <button onClick={searchLocations}>Search</button>
                <ul>
                    {locations.residents?.map(resident => (
                       <Residents url={resident} key={resident} />
                    ))}

                </ul>
                
            </div>
        </div>
    );
};

export default Locations;