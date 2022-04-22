import React from 'react';
import TarjetProfile from '../components/TarjetProfile';


import '../styles/MainTarjet.css';



const MainTarjet = () => {

    return(
        <main className="main_tarjet">
        
            <div className="container">

                {/*<p className="container_title">Bienvenido a mi portafolio</p>*/}

                <TarjetProfile/>

              
            </div>
        
        </main>
    );
};

export default MainTarjet;