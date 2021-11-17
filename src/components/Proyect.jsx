import React from 'react';
import '../styles/Proyect.css';


const Proyect = (item) => {

    const proyect = item.elements;


    return(
        <div className="proyect">

            

            <img className="proyectImg" src={proyect.cover} alt=""/>

            <div className="proyectDescription">

                <div className="gosth">

                    <p className="proyectDescription_title">{proyect.title}</p>

                    <p>{proyect.description}</p>    

                    <div className="buttonsContainer">
                        <button type="button">ver</button>
                        <button type="button">ver en Github</button>
                    </div>
                    
                </div>

                
            </div>

            
        </div>   
    );
};

export default Proyect;