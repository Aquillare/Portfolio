import React from 'react';
import '../styles/Button.css';

const Button = ({element}) => {


    return(
        <button type="button" className="container_button">
            <img src={element.src} alt={`${element.name}-icon`}/>
            <span>{element.name}</span>
        </button>
    );
       
};

export default Button;