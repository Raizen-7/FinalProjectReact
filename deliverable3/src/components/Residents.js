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
            <div>
                <p>Name: {resident.name}</p>
                <p>State: {resident.status} </p>
                <p>Origin: {resident.origin?.name} </p>
                <p>Episode: {resident.episode?.length} </p>
                <img src={resident.image} alt="" />
            </div>
        </li>
    );
};

export default Residents;