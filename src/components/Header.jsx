import React,{useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Header.css';
import MenuMobile from './MenuMobile';
import iconMenu from '../../assets/icons/icon-menu-portfolio.png';
import AppContext from '../context/AppContext';

const Header = () => {

    const {mobileMenuShow,mobileMenuHidden,state} = useContext(AppContext);

    console.log(state);


    const handleToggle = () => {
        !state.mobileMenu 
            ?
        mobileMenuShow()
            :
        mobileMenuHidden();
    };

    

  
    return(
        <header>
            <nav className="desktopMenu">
                <figure className="nav_menu" onClick={() => handleToggle()}>   
                    <img src={iconMenu}/>
                </figure>

                {state.mobileMenu && <MenuMobile/>}

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

            

           {/*<Outlet /> */} 
        </header>
    );
};

export default Header;