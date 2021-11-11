import React from "react"    
import SkillFigure from "../components/SkillFigure"
import gitIcon from '../../assets/icons/git-icon.png';
import htmlIcon from '../../assets/icons/html5-icon.png';
import javascriptIcon from '../../assets/icons/javascript-icon.png';
import webpackIcon from '../../assets/icons/webpack-icon.png';
import npmIcon from '../../assets/icons/npm-icon.png';
import reactIcon from '../../assets/icons/react-icon.png';
import vscodeIcon from '../../assets/icons/webpack-icon.png';
import cssIcon from '../../assets/icons/css3-icon.png';

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
        npm:{
            name:'NPM',
            src:npmIcon,
        },
        react:{
            name:'React',
            src:reactIcon,
        },
        vsCode:{
            name:'VS Code',
            src:vscodeIcon,
        },
        css:{
            name:'CSS3',
            src:cssIcon,
        },
    }

    return(
        <div class="skillsTarjet_container">

            <SkillFigure elements={SkillsElements.webpack}/>
            <SkillFigure elements={SkillsElements.javascript}/>
            <SkillFigure elements={SkillsElements.html}/>
            <SkillFigure elements={SkillsElements.css}/>
            <SkillFigure elements={SkillsElements.react}/>
            <SkillFigure elements={SkillsElements.npm}/>
            <SkillFigure elements={SkillsElements.git}/>
            <SkillFigure elements={SkillsElements.vsCode}/>
                
        </div>
    );
};

export default SkillsTarjet;
    
   