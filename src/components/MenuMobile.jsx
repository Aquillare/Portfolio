import React from "react";
import '../styles/MenuMobile.css';
import { Link } from "react-router-dom";

const MenuMobile = () => {
    
    return( 
        <div className="menuContainer_mobile">
            <ul className="mobileUl">
                    <li className="mobileLi">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="mobileLi">
                        <Link to="about">Acerca</Link>
                    </li>
                    <li className="mobileLi"> 
                        <Link to="proyects">Proyectos</Link>
                    </li>
            </ul>
        </div>
    );
};

export default MenuMobile;