import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

    return(
        <header>
            <nav>
                <figure className="nav_menu">
                    <img src='../styles/icons/icon-menu-portfolio.png'/>
                </figure>
                <ul>
                    <BrowserRouter>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/">Acerca</Link>
                    </li>
                    <li>
                        <Link to="/">Proyectos</Link>
                    </li>
                    </BrowserRouter>
                </ul>
            </nav>
        </header>
    );
};

export default Header;