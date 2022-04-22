import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';



//En este componenete tenemos que colocar el header y el footer para que tenga persitencia en todas nuestras paginas,
//ver ejemplo en el archivo del curso de react router y redux.

const Layout = () => {

    return(
        <div className="App">
            <Outlet/>
            <Header/>
            
            <Footer/>
            
        </div>    
    );
};

export default Layout;