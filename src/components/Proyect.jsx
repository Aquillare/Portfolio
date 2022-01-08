import React from 'react';
import '../styles/Proyect.css';
import TecnologiesItem from './TecnologiesItem';
import githubIcon from '../../assets/icons/github-icon.png';
import arrow from '../../assets/icons/arrow.png'


const Proyect = (item) => {

    const proyect = item.elements;

    return(
        <div className="proyect">

            

            <img className="proyectImg" src={proyect.cover} alt=""/>

            <div className="proyectDescription">

                <div className="gosth">

                    <p className="proyectDescription_title">{proyect.title}</p>

                    <p className='proyectDescription_content'>{proyect.description}</p>

                    <div className='tecnologies_container'>

                        {proyect.tecnologies.map( element => {
                        return  <TecnologiesItem value={element} key={element}/>
                        })}    

                    </div>    
                 
                    <div className="buttonsContainer">
                        <button type="button" >
                            <a href={proyect.urlView} target="blank">ver</a>
                        </button>
                        <button type="button">
                            <a href={proyect.urlGit} target="blank">ver en Github</a>
                        </button>
                    </div>
                    
                </div>

                
            </div>

            
        </div>   
    );
};

export default Proyect;