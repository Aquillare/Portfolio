import React from 'react';
import '../styles/Proyect.css';
import  proyect1 from '../../assets/images/PlatziVideoProyect.jpeg';

const Proyect = () => {


    return(
        <div className="proyect">

            <img className="proyectImg" src={proyect1} alt=""/>

            <div className="proyectDescription">

                <p>Este proyecto hadhada hdhad hahdha dhgahg dhaghd <br/>ghagdh gahd ghagdhegfg hkvbvkv hdvhdb vhdbvh dbvjh bhd</p>    

                <div className="buttonsContainer">
                    <button type="button">ver</button>
                    <button type="button">ver en Github</button>
                </div>

                
            </div>

            
        </div>   
    );
};

export default Proyect;