import React from 'react';
import '../styles/TarjetProfile.css';
import profilePhoto from '../../assets/images/foto_portfolio_sinFondo.png';

const TarjetProfile = () => {

    return(
        <>
        {/*<div className="container_tarjetProfile">
                    
            <div className="tarjetProfile">

                <div className="tarjetProfile_text">
                    <p className="tarjetProfile_title">Hola</p>
                    <p className="tarjetProfile_subtitlte">mi nombre es Miguel Aguilar y soy </p>
                    <p className="tarjetProfile_subtitle2">desarrollador Web Front-end</p>
                
                    
                </div>
                
                <img className="tarjetProfile_img" src={profilePhoto}/>
                
            </div>
        </div>*/}

        <div className="tarjetProfile">

        <div className="tarjetProfile_text">
            <h2 className="tarjetProfile_title">Hola</h2>
            <h1 className="tarjetProfile_subtitlte">mi nombre es Miguel Aguilar</h1>
            <h3 className="tarjetProfile_subtitle2">desarrollador Web Front-end</h3>
        
            
        </div>
        
        <img className="tarjetProfile_img" /*src={profilePhoto}*/ src={'https://i.postimg.cc/MHKcRrWh/foto-portfolio-sin-Fondo.png'}/>
        
    </div>
    </>
    );
};

export default TarjetProfile;