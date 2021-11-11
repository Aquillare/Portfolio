import React from 'react';
import SkillsTarjet from '../containers/SkillsTarjet';
import TextAbout from '../components/TextAbout';




const MainAbout = () => {



    return(
        <main class="main">

            <div class="container2">

                <p class="container_title">Acerca de mi</p>
                <TextAbout/>    

            </div>

            <div class="containerSkills">
            
                <h2 class="container_title">Habilidades</h2>
                
                <SkillsTarjet/>

            </div>

        </main>
    );
};

export default MainAbout;

   