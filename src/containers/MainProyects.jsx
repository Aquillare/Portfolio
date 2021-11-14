import React from 'react';
import Proyect from '../components/Proyect';
import '../styles/MainProyects.css';
import Button from '../components/Button';

const MainProyects = () => {



    return(
        <main className="main">

            <section className="container3">

                <p className="container_title">Mis Proyectos</p>
                
                <div className="proyectsContainer">

                    <Proyect/>

                    <Proyect/>

                    <Proyect/>

                </div>

            </section>
    </main>
    );
};

export default MainProyects;


