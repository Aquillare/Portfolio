import React from 'react';
import {Route, Routes} from 'react-router-dom';
import '../styles/global/Global.css';
import Home from '../pages/Home';
import About from '../pages/About';
import Layout from '../containers/Layout';
import Proyects from '../pages/Proyects';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/UseInitialState';



const App = () =>{

    const initialState = useInitialState();

    return(

        <div>               
                <AppContext.Provider value={initialState}>
                    <Routes>
                        
                        <Route path="/" element={<Layout/>}>

                            <Route index element={<Home/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="proyects" element={<Proyects/>}/>

                        </Route>    
                        
                    </Routes>
                </AppContext.Provider>
                    
                    
                 
       </div>
        
           
    );
};

export default App;
