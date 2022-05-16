import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Residents = ({url}) => {

    const [resident, setResident] = useState({});

    useEffect(()=>{
        axios.get(url)
            .then(res => setResident(res.data))
    },[url]);
    
console.log(resident);

    return (

            <li >
                <div className='cardContainer'>
                    <div className='card'>
                        <div className='date'>   
                            <p>Name: {resident.name}</p>
                            <p>State: {resident.status} </p>
                            <p>Origin: {resident.origin?.name} </p>
                            <p>Episode: {resident.episode?.length} </p>
                        </div> 
                        <div className='photo'>
                            <img src={resident.image} alt="" />
                        </div>      
                    </div>
                </div>
            </li>

    );
};

export default Residents;