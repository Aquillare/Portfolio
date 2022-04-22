import React from "react";
import reactImg from '../../assets/icons/react-icon.png';
import githubIcon from '../../assets/icons/github-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';
import Button from '../components/Button';
import '../styles/Footer.css';

const Footer = () => {

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
        <footer className="footer">
            <div className="footer_container">
                <p>Desarrollado por Miguel Aguilar</p>
                <div className="container_buttons">
                    <Button element={elementButton.github}/>
                        
                    <Button element={elementButton.linkedin}/>                    
                </div>
                <p>Con React Js <img src={reactImg}/></p>
            </div>
        </footer>
    );
};

export default Footer;
