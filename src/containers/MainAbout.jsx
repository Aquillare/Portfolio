import React from 'react';
import SkillsTarjet from '../containers/SkillsTarjet';
import TextAbout from '../components/TextAbout';
import '../styles/MainAbout.css';




const MainAbout = () => {



    return(
        <main className="main_about">

            <div className="container2">

                <h2 className="container_title">Acerca de mi</h2>
                <TextAbout/>    

            </div>

            <div className="containerSkills">
            
                <h2 className="container_title">Habilidades</h2>
                
                <SkillsTarjet/>

            </div>

        </main>
    );
};

export default MainAbout;

   