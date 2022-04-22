import React from "react"
import '../styles/SkillsTarjet.css';    
import SkillFigure from "../components/SkillFigure"
import gitIcon from '../../assets/icons/git-icon.png';
import htmlIcon from '../../assets/icons/html5-icon.png';
import javascriptIcon from '../../assets/icons/javascript-icon.png';
import webpackIcon from '../../assets/icons/webpack-icon.png';
import npmIcon from '../../assets/icons/npm-icon.png';
import reactIcon from '../../assets/icons/react-icon.png';
import vscodeIcon from '../../assets/icons/vscode-icon.png';
import cssIcon from '../../assets/icons/css3-icon.png';
import nextIcon from '../../assets/icons/next.svg';
import nodeIcon from '../../assets/icons/nodo-js.png';
import postgreIcon from '../../assets/icons/postgre.png';

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
        javascript:{
            name:'Javascript',
            src:javascriptIcon,
        },
        webpack:{
            name:'Webpack',
            src:webpackIcon,
        },
        node:{
            name:'Node js',
            src:nodeIcon,
        },
        react:{
            name:'React',
            src:reactIcon,
        },
        next:{
            name:'Next js',
            src:nextIcon,
        },
        css:{
            name:'CSS3',
            src:cssIcon,
        },
        postgreSql:{
            name:'PostgreSQL',
            src:postgreIcon,
        },
        npm:{
            name:'NPM',
            src:npmIcon,
        },
    }

    return(
        <div className="skillsTarjet_container">

            <SkillFigure elements={SkillsElements.webpack}/>
            <SkillFigure elements={SkillsElements.javascript}/>
            <SkillFigure elements={SkillsElements.html}/>
            <SkillFigure elements={SkillsElements.css}/>
            <SkillFigure elements={SkillsElements.react}/>
            <SkillFigure elements={SkillsElements.node}/>
            <SkillFigure elements={SkillsElements.git}/>
            <SkillFigure elements={SkillsElements.next}/>
            <SkillFigure elements={SkillsElements.postgreSql}/>
            <SkillFigure elements={SkillsElements.npm}/>
                
        </div>
    );
};

export default SkillsTarjet;
    
   