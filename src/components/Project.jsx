import React from 'react';
import '../styles/Project.css';
import TecnologiesItem from './TecnologiesItem';


const Project = ({elements, key}) => {

    const project = elements;
    let id = key;

    console.log(id);

    return(
        <div className="project">

            

            
            <div className="projectDescription">

                <div className="gosth">

                    <h3 className="projectDescription_title">{project.title}</h3>

                    <p className='projectDescription_content'>{project.description}</p>

                    <div className='tecnologies_container'>

                        {project.tecnologies.map( element => {
                        return  <TecnologiesItem value={element} key={element}/>
                        })}    

                    </div>    
                 
                    <div className="buttonsContainer">
                        <button type="button" >
                            <a href={project.urlView} target="blank">See</a>
                        </button>
                        <button type="button">
                            <a href={project.urlGit} target="blank">See on Github</a>
                        </button>
                    </div>
                    
                </div>

                
            </div>

            <img id={key} className="projectImg" src={project.cover} alt="project-image"/>
            
        </div>   
    );
};

export default Project;