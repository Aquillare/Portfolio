import React from 'react';
import {Route, Routes} from 'react-router-dom';
import '../styles/global/Global.css';
import Home from '../pages/Home';
import About from '../pages/About';
import Layout from '../containers/Layout';
import Proyects from '../pages/Proyects.jsx';



const App = () =>{

    return(

        <div>               
                    <Routes>
                        
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="proyects" element={<Proyects/>}/>

                        </Route>    
                        
                    </Routes>
       </div>
        
           
    );
};

export default App;
