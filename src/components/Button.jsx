import React from 'react';
import '../styles/Button.css';

const Button = ({element}) => {


    return(
        <a href={element.url} target="blank">
        <button type="button" className="container_button">
            <img src={element.src} alt={`${element.name}-icon`}/>
            <span>{element.name}</span>
        </button>
        </a>
    );
       
};

export default Button;