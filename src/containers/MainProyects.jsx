import React from 'react';
import Proyect from '../components/Proyect';
import '../styles/MainProyects.css';
import thisTrailerCover from '../../assets/images/this-trailer-app-.png';
import yardSaleCover from '../../assets/images/yard-sale-cover.png';
import todoAppCover from '../../assets/images/TodoProyect.png';

const MainProyects = () => {

    const proyects = [
        {
            id:1,
            title:"This trailer",
            description:"Sitio web para la busqueda y visualizacion de informacion y trailers de peliculas.",
            tecnologies:["Javascript","HTML", 'SASS', "React", "Redux"],
            cover:thisTrailerCover,
            urlView:'https://this-trailer.netlify.app/',
            urlGit:'https://github.com/Aquillare/This-Trailer'
        },

        {
            id:2,
            title:"Yard Sale",
            description:"Tienda Online con seleccion de categorias y carrito de compras",
            tecnologies:["Javascript","HTML", 'SASS', "React"],
            cover:yardSaleCover,
            urlView:'https://yarddsale.netlify.app/',
            urlGit:'https://github.com/Aquillare/React-Shop'
        },

        {
            id:3,
            title:'Todo App',
            description:"Sitio web donde podras realizar listas de tareas, filtrar tares y marcar las tareas ya realizadas",
            tecnologies:["Javascript","HTML","CSS","React"],
            cover:todoAppCover,
            urlView:'https://todo-ap-netllify.app',
            urlGit:'https://github.com/Aquillare/Todo-App',

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


                </div>

            </section>
    </main>
    );
};

export default MainProyects;


