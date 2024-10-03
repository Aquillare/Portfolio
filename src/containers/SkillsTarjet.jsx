import React from "react"
import '../styles/SkillsTarjet.css';    
import SkillFigure from "../components/SkillFigure"
import gitIcon from '../../assets/icons/git-icon.png';
import htmlIcon from '../../assets/icons/html5-icon.png';
import javascriptIcon from '../../assets/icons/javascript-icon.png';
import reactIcon from '../../assets/icons/react-icon.png';
import cssIcon from '../../assets/icons/css3-icon.png';
import nextIcon from '../../assets/icons/next.svg';
import nodeIcon from '../../assets/icons/nodo-js.png';
import postgreIcon from '../../assets/icons/postgre.png';
import supabaseIcon from '../../assets/icons/supabase-logo.png'
import tailwindIcon from '../../assets/icons/tailwind-icon.png';

const SkillsTarjet = () => {

    const SkillsElements = {
        git:{
            name:'Git',
            src:gitIcon,
        },
        html:{
            name:'HTML5',
            src:htmlIcon,
        },
        css:{
            name:'CSS3',
            src:cssIcon,
        },
        tailwind:{
            name:'Tailwind CSS',
            src:tailwindIcon
        },
        javascript:{
            name:'Javascript',
            src:javascriptIcon,
        },
        react:{
            name:'React',
            src:reactIcon,
        },
        next:{
            name:'Next js',
            src:nextIcon,
        },
        node:{
            name:'Node js',
            src:nodeIcon,
        },
        postgreSql:{
            name:'PostgreSQL',
            src:postgreIcon,
        },
        supabase:{
            name:"Supabase",
            src:supabaseIcon
        },
    }

    return(
        <div className="skillsTarjet_container">
            {Object.values(SkillsElements).map((skill,id) =>  <SkillFigure key={id} elements={skill}/>)}        
        </div>
    );
};

export default SkillsTarjet;
    
   