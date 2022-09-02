import React from 'react';
import '../styles/Proyect.css';
import TecnologiesItem from './TecnologiesItem';


const Proyect = ({elements, key}) => {

    const proyect = elements;
    let id = key;

    console.log(id);

    return(
        <div className="proyect">

            

            
            <div className="proyectDescription">

                <div className="gosth">

                    <h3 className="proyectDescription_title">{proyect.title}</h3>

                    <p className='proyectDescription_content'>{proyect.description}</p>

                    <div className='tecnologies_container'>

                        {proyect.tecnologies.map( element => {
                        return  <TecnologiesItem value={element} key={element}/>
                        })}    

                    </div>    
                 
                    <div className="buttonsContainer">
                        <button type="button" >
                            <a href={proyect.urlView} target="blank">See</a>
                        </button>
                        <button type="button">
                            <a href={proyect.urlGit} target="blank">See on Github</a>
                        </button>
                    </div>
                    
                </div>

                
            </div>

            <img id={key} className="proyectImg" src={proyect.cover} alt="proyect-image"/>
            
        </div>   
    );
};

export default Proyect;