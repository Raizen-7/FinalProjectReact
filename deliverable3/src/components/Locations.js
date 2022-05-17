import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';


const Locations = () => {
 
    //Hook de control de estados de la localización obtenida de la API.
    const [locations, setLocations] = useState({});

    //hook de carga
    const [loading, setLoading] = useState(true)

    //hook para el el boton
    const [id, setId] = useState("");


    //Hook controlador de bucles dependiendo de las dependencias incertadas en el arreglo.
    useEffect(() => {
        // Contante que guarda los ID consultados de forma aleatorioa desde la API
        const random = Math.floor(Math.random() * 126) + 1;
        //
        axios.get(`https://rickandmortyapi.com/api/location/${random}/`).then((res) => {setLocations(res.data)
        setLoading(false)});
    }, []);

    // console.log(locations);
    // console.log(id)

    const searchLocations = () => {

        if (id <= 126) {
            axios.get(`https://rickandmortyapi.com/api/location/${id}/`).then((res) => setLocations(res.data));
        } else {
            alert("This only have 126 id to show")
        }

        };
        if (loading) {
            return(
                  <div>
                        <h2>LOADING........</h2>
                  </div>
            )
 
      } else {    


    return (
        <main>
            <h1>Rick & Morty</h1>
            <h2 className='locations'>{locations.name}</h2>

            <div className='content'>

                <div className='contentThis'>
                    <div className='This'>
                        <div className='pepito'>
                            <p>Type: {locations.type}</p>
                            <p>Dimension : {locations.dimension}</p>
                            <p>Population: {locations.residents?.length}</p>
                        </div>
                        <div className='contentInputAndButton'>
                            <div className='contentInput'>
                                <input type="number"
                                    onChange={(e) => setId(e.target.value)}
                                    value={id} name="number"/>
                                <button onClick={searchLocations}>Search</button>
                            </div>
                        </div>
                    </div>

                </div>



                </div>

                <div className='residents' >

                    <ul>
                        {locations.residents?.map(resident => (
                            <ResidentInfo url={resident} key={resident} />
                        ))}
                    </ul>
                </div>

            

        </main>
    )};
};

export default Locations;