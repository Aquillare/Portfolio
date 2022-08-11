import React, {useState} from 'react';
import Proyect from '../components/Proyect';
import '../styles/MainProyects.css';
import thisTrailerCover from '../../assets/images/this-trailer-app-.png';
import yardSaleCover from '../../assets/images/yardSale.png';
import todoAppCover from '../../assets/images/TodoProyect.png';


const MainProyects = () => {

    const proyects = [
        {
            id:1,
            title:"This trailer",
            description:"Sitio web para la busqueda y visualización de información y trailers de películas, en su desarrollo se implementaron peticiones a un API rest, posee diseño responsivo.",
            tecnologies:["Javascript","HTML", 'SASS', "React", "Redux"],
            cover:thisTrailerCover,
            urlView:'https://this-trailer.netlify.app/',
            urlGit:'https://github.com/Aquillare/This-Trailer'
        },

        {
            id:2,
            title:"Yard Sale",
            description:"Tienda Online con selección de categorias, carrito de compras y log in de usuarios, implementamos llamadas a un API rest para la obtencón de productos, categorías, creación de nuevos usuarios y log in, posee diseño responsivo.",
            tecnologies:["Javascript","HTML", 'SASS', "React","Next"],
            cover:yardSaleCover,
            urlView:'https://next-js-shop-eight.vercel.app/',
            urlGit:'https://github.com/Aquillare/NextJs-Shop'
        },

        {
            id:3,
            title:'Todo App',
            description:"Sitio web donde podrás realizar listas de tareas, filtrarlas y marcar las tareas ya realizadas, se implementa el storage del navegador para almacenar el estado de la app.",
            tecnologies:["Javascript","HTML","CSS","React"],
            cover:todoAppCover,
            urlView:'https://todo-ap.netlify.app',
            urlGit:'https://github.com/Aquillare/Todo-App',

        },

    ];

  

    const [num, setNum] = useState(0);

    const counterNext = (element) => {
        num >= element.length -1 ? setNum(0): setNum(num+1);
    };
    const counterPrevious = (element) => {
        num === 0 ? setNum(element.length -1) : setNum(num-1);
    }

    return(
        <main className="main_proyects">

            <section className="container3">

             
                
                <div className="proyectsContainer">

                
                    
                        <Proyect elements={proyects[num]} key={proyects[num]['id']}/>
                    


                </div>
                <div className='proyects_buttonsContainer'>
                    <button className='proyects_button' onClick={() => counterPrevious(proyects) } type='button'> {'<'}</button>
                    <ul className='proyects_list'> 
                        {proyects.map( proyect => 
                                        <li className={ num +1 === proyect.id ? 'proyects_list_li_id' : 'proyects_list_li'}
                                            onClick={() => {setNum(proyect.id-1)}}    
                                        >
                                             <a ></a> 
                                        </li>)
                        }
                    </ul>
                    <button className='proyects_button' onClick={() => counterNext(proyects) } type='button'> {'>'}</button>
                </div>
                    
            </section>
    </main>
    );
};

export default MainProyects;


