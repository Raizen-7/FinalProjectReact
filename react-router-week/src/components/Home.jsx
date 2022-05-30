import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Home = () => {

    const [password, setPassword] = useState("");
    const navigate = useNavigate();

        // const redirect = ()=>{
    //    navigate("/Contact");
    // }

    const submit = e => {
        e.preventDefault();
        if(password === "Avanzar"){
            navigate("/About")   
        } else {
            alert("La contraseña es incorrecta")
        }
    }



    return (
        <div className="Home">
            <h1>Ruta Principal</h1>
            <form action='' onSubmit={submit}>
                <input type="text" 
                    value = {password} 
                    onChange = {e => setPassword(e.target.value)}
                />
                <button> Submit </button>
            </form>
            <Link to="/Team/Lisy">Lisy</Link>
            <Link to="/Projects/25">Projects</Link>

        </div>
    );
};

export default Home;    <h1>Ruta Principal</h1>