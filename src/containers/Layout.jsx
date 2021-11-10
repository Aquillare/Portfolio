import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


//En este componenete tenemos que colocar el header y el footer para que tenga persitencia en todas nuestras paginas,
//ver ejemplo en el archivo del curso de react router y redux.

const Layout = ({children}) => {

    return(
        <div className="App">
            <Header/>
                {children}
            <Footer/>
        </div>    
    );
};

export default Layout;