import React, {useState} from 'react';
import Project from '../components/Project';
import '../styles/MainProjects.css';
import thisTrailerCover from '../../assets/images/this-trailer-app-.png';
import yardSaleCover from '../../assets/images/yardSale.png';
import todoAppCover from '../../assets/images/TodoProject.png';


const MainProjects = () => {

    const projects = [
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

    return(
        <main className="main_projects" id="Projects">

            <div className="container_title">
                            <h2>Projects</h2>
                        </div>

            <section className="container3">

           
                

                
                    
                        <Project elements={projects[num]} key={projects[num]['id']}  num={num} setNum={setNum} projects={projects}/>
                    


                
                    
            </section>
    </main>
    );
};

export default MainProjects;


