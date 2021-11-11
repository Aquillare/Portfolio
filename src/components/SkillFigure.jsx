import React from 'react'

const SkillFigure = ({elements}) => {
     
    return(
        <figure className="skillsTarjet_figure">
            <img src={elements.src}/>
            <span>{elements.name}</span>
        </figure>
    );
};

export default SkillFigure;

