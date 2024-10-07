import React from 'react';
import SkillsTarjet from '../containers/SkillsTarjet';
import TextAbout from '../components/TextAbout';
import '../styles/MainAbout.css';
import scienceImage from "../../assets/svg/science-1-11.svg";




const MainAbout = () => {



    return(
        <main className="main_about" id="About">

            <div className="container_title">
                <h2>About me</h2>
            </div>

            <div className="container2">

                {/* <h2 className="container_title">About me</h2>
                 */}
                 <TextAbout/>  
                <img className="mainAbout_science_img" src={scienceImage} />
                  

            </div>

            <div className="containerSkills">
            
                <h2 className="container_title">Skills</h2>
                
                <SkillsTarjet/>

            </div>

        </main>
    );
};

export default MainAbout;

   