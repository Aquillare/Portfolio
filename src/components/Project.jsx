import React from 'react';
import '../styles/Project.css';
import TecnologiesItem from './TecnologiesItem';


const Project = ({elements, key,num, setNum,projects}) => {

    const project = elements;
    let id = key;

    const counterNext = (element) => {
        num >= element.length -1 ? setNum(0): setNum(num+1);
    };
    const counterPrevious = (element) => {
        num === 0 ? setNum(element.length -1) : setNum(num-1);
    }

    return(
       <>
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
                        <button type="button">
                            <a href={project.urlView} target="blank">See</a>
                        </button>
                        <button type="button">
                            <a href={project.urlGit} target="blank">See on Github</a>
                        </button>
                    </div>

                    <div className='projects_buttonsContainer'>
                        <button className='projects_button' onClick={() => counterPrevious(projects) } type='button'> {'<'}</button>
                        <ul className='projects_list'> 
                            {projects.map( proyect => 
                                            <li className={ num +1 === proyect.id ? 'projects_list_li_id' : 'projects_list_li'}
                                                onClick={() => {setNum(proyect.id-1)}}    
                                            >
                                                <a ></a> 
                                            </li>)
                            }
                        </ul>
                    <button className='projects_button' onClick={() => counterNext(projects) } type='button'> {'>'}</button>
                </div>
                    
                </div>

                
            </div>

            <img id={key} className="projectImg" src={project.cover} alt="project-image"/>
            
        </>   
    );
};

export default Project;