import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

    return(
        <header>
            <nav>
                <figure className="nav_menu">
                    <img src='../styles/icons/icon-menu-portfolio.png'/>
                </figure>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="about">Acerca</Link>
                    </li>
                    <li>
                        <Link to="/">Proyectos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    );
};

export default Header;