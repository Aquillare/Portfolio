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
            description:"Website for the search and visualization of information and movie trailers, requests to other APIs were implemented in its development, it has a responsive design",
            tecnologies:["JavaScript","HTML", 'SASS', "React", "Redux"],
            cover:thisTrailerCover,
            urlView:'https://this-trailer.netlify.app/',
            urlGit:'https://github.com/Aquillare/This-Trailer'
        },

        {
            id:2,
            title:"Yard Sale",
            description:"Online store with selection of categories, shopping cart and user login, we implement calls to other APIs to obtain products and categories. We developed a backend Service for the creation of new users, login and protection of routes through JWT",
            tecnologies:["JavaScript","HTML", 'SASS', "React","Next"],
            cover:yardSaleCover,
            urlView:'https://next-js-shop-eight.vercel.app/',
            urlGit:'https://github.com/Aquillare/NextJs-Shop'
        },

        {
            id:3,
            title:'Todo App',
            description:"Web App were you can make to do list, filter them and check done tasks, implements browser storage for storing the app state.",
            tecnologies:["JavaScript","HTML","CSS","React"],
            cover:todoAppCover,
            urlView:'https://apptodo2.netlify.app/',
            urlGit:'https://github.com/Aquillare/TodoApp-React-patrones-render',

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


