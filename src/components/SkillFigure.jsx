import React from 'react'
import '../styles/SkillFigure.css';

const SkillFigure = ({elements}) => {
     
    return(
        <figure className="skillsTarjet_figure">
            <img src={elements.src}/>
            <span>{elements.name}</span>
        </figure>
    );
};

export default SkillFigure;

