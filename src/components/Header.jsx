import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Header.css';
import MenuMobile from './MenuMobile';
import { useState } from 'react';
import iconMenu from '../../assets/icons/icon-menu-portfolio.png';

const Header = () => {

    const [toggle,setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
        // setTimeout(() => setToggle(toggle), 3000)
    };

    return(
        <header>
            <nav className="desktopMenu">
                <figure className="nav_menu" onClick={() => handleToggle()}>   
                    <img src={iconMenu}/>
                </figure>

                {toggle && <MenuMobile/>}

                <ul className="desktopMenu_ul">
                    <li className="desktopMenu_li">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="desktopMenu_li">
                        <Link to="about">Acerca</Link>
                    </li>
                    <li className="desktopMenu_li">
                        <Link to="proyects">Proyectos</Link>
                    </li>
                </ul>
            </nav>

            

            <Outlet />
        </header>
    );
};

export default Header;