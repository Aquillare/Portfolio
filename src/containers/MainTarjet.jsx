import React from 'react';
import TarjetProfile from '../components/TarjetProfile';


import '../styles/MainTarjet.css';



const MainTarjet = () => {

    return(
        <main className="main_tarjet" id="Main">
        
            <div className="container">

                <TarjetProfile/>

              
            </div>
        
        </main>
    );
};

export default MainTarjet;