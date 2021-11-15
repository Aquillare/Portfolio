import React from 'react';
import Proyect from '../components/Proyect';
import '../styles/MainProyects.css';
import Button from '../components/Button';
import  platziVideoCover from '../../assets/images/PlatziVideoProyect.jpeg';

const MainProyects = () => {

    const proyects = [
        {
            id:1,
            title:"Platzi Video",
            description:"Descripcion del proyecto",
            tecnologies:"Tecnologias usadas",
            cover:platziVideoCover,
        },

        {
            id:2,
            title:"Platzi Video",
            description:"Descripcion del proyecto",
            tecnologies:"Tecnologias usadas",
            cover:platziVideoCover,
        },

        {
            id:3,
            title:"Platzi Video",
            description:"Descripcion del proyecto",
            tecnologies:"Tecnologias usadas",
            cover:platziVideoCover,
        }
    ]


    return(
        <main className="main">

            <section className="container3">

                <p className="container_title">Mis Proyectos</p>
                
                <div className="proyectsContainer">

                
                    {
                        proyects.map( item => <Proyect elements={item} key={`proyect-${item.id}`}/>)
                    }

                    {/* <Proyect/>

                    <Proyect/> */}

                </div>

            </section>
    </main>
    );
};

export default MainProyects;


