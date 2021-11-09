import React from 'react';
import '../styles/TarjetProfile.css';
import profilePhoto from '../../assets/icons/fotoPerfilPrueba.jpg';

const TarjetProfile = () => {

    return(
        <div className="container_tarjetProfile">
                    
            <div className="tarjetProfile">

                <div className="tarjetProfile_text">
                    <p className="tarjetProfile_title">Hola</p>
                    <p className="tarjetProfile_subtitlte">mi nombre es Miguel Aguilar y soy </p>
                    <p className="tarjetProfile_subtitle2">desarrollador Web Front-end</p>
                
                    
                </div>
                
                <img className="tarjetProfile_img" src={profilePhoto}/>
                
            </div>
        </div>
    );
};

export default TarjetProfile;