import React from "react";
import reactImg from '../../assets/icons/react-icon.png';

const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer_container">
                <p>Desarrollado por Miguel Aguilar</p>
                <p>Con React Js <img src={reactImg}/></p>
            </div>
        </footer>
    );
};

export default Footer;
