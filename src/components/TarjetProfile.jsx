import React from 'react';
import '../styles/TarjetProfile.css';

const TarjetProfile = () => {

    return(
    <>
        <div className="tarjetProfile">

        <div className="tarjetProfile_text">
            <h2 className="tarjetProfile_subtitlte">Hola <br/>mi nombre es Miguel Aguilar</h2>
            <p className="tarjetProfile_subtitle2">desarrollador Web Front-end</p>
        </div>
        
        <img className="tarjetProfile_img" /*src={profilePhoto}*/ src={'https://i.postimg.cc/MHKcRrWh/foto-portfolio-sin-Fondo.png'}/>
        
       </div>
    </>
    );
};

export default TarjetProfile;