import React from 'react';
import '../styles/TarjetProfile.css';

const TarjetProfile = () => {

    return(
    <>
        <div className="tarjetProfile">

        <div className="tarjetProfile_text">
            <h2 className="tarjetProfile_subtitlte">Hello! <br/>My name is Miguel Aguilar</h2>
            <p className="tarjetProfile_subtitle2">Web Developer</p>
            <p className="tarjetProfile_subtitlte">Welcome to my portfolio </p>
        </div>
        
       {/* <img className="tarjetProfile_img" src={'https://i.postimg.cc/MHKcRrWh/foto-portfolio-sin-Fondo.png'} /> */}
        
        </div> 
    </>
    );
};

export default TarjetProfile;