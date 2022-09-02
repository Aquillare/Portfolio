import React,{ useContext } from "react";
import '../styles/MenuMobile.css';
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";



const MenuMobile = () => {

    const {mobileMenuHidden} = useContext(AppContext);

    const handleToggle = () =>{
        mobileMenuHidden();
    }
    
    return( 
     
        <div className="menuContainer_mobile">
                <ul className="mobileUl">
                        <li className="mobileLi" onClick={() => handleToggle()}>
                            <Link to="/" >Main</Link>
                        </li>
                        <li className="mobileLi">
                            <Link to="about" onClick={()=> handleToggle()}>About</Link>
                        </li>
                        <li className="mobileLi"> 
                            <Link to="proyects" onClick={()=> handleToggle()}>Proyects</Link>
                        </li>
                </ul>
        </div>   
    
        
    );
};

export default MenuMobile;