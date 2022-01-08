import React from 'react';
import '../styles/tecnologiesItem.css';
const TecnologiesItem = (props) => {
    const item = props.value
    return(
        <div className='tecnologies_item'>
            <p>{item}</p>
        </div>
        
    )
}

export default TecnologiesItem;