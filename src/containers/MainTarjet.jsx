import React from 'react';
import TarjetProfile from '../components/TarjetProfile';
import Button from '../components/Button';

import '../styles/MainTarjet.css';
import githubIcon from '../../assets/icons/github-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';


const MainTarjet = () => {



    const elementButton = {

        github:{
            src:githubIcon,
            name:"Github",
            url:"https://github.com/Aquillare",
        },
        linkedin:{
            src:linkedinIcon,
            name:"Linkedin",
            url:"https://www.linkedin.com/in/mig55zt"
        },    
    };

    return(
        <main className="main">
        
            <div className="container">

                <p className="container_title">Bienvenido a mi portafolio</p>

                <TarjetProfile/>

                <div className="container_buttons">
                    <Button element={elementButton.github}/>
                        
                    <Button element={elementButton.linkedin}/>                    
                </div>
            </div>

        </main>
    );
};

export default MainTarjet;