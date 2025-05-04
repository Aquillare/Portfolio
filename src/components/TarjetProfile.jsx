import React from 'react';
import startUpImage from "../../assets/svg/start-up-7.svg";
import { Link } from 'react-router-dom';
import '../styles/TarjetProfile.css';

const TarjetProfile = () => {

    return(
    <>
        <div className="tarjetProfile">

        <div className="tarjetProfile_text">
            <h2 className="tarjetProfile_subtitlte">Hello! <br/>I'm Miguel Aguilar</h2>
            <p className="tarjetProfile_subtitle2">Frontend Developer</p>
            <p className="tarjetProfile_subtitlte">Welcome to my portfolio </p>
            <label >
                 
            <a className="seeMore_text" href="#About">{"See more about me"}</a>
           
            </label>
        </div>
        
       {/* <img className="tarjetProfile_img" src={'https://i.postimg.cc/MHKcRrWh/foto-portfolio-sin-Fondo.png'} /> */}
       <img className="tarjetProfile_img" src={startUpImage}/>
        


        </div> 
    </>
    );
};

export default TarjetProfile;