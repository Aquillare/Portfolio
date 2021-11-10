import React from 'react';
import {Route, Routes} from 'react-router-dom';
import '../styles/global/Global.css';
import Home from '../pages/Home';
import Layout from '../containers/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';


const App = () =>{

    return(

        <div>               
                    <Routes>
                        
                        <Route path="/" element={<Header/>}>
                            <Route index element={<Home/>}/>
                            <Route path="About" element={<Footer/>}/>

                        </Route>    
                        
                    </Routes>
       </div>
        
           
    );
};

export default App;
