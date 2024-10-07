import React from 'react';
import MainAbout from '../containers/MainAbout';


const About = () =>{

    React.useEffect( () => {
        window.scrollTo(0,0)
    }, []);

    return(
        <MainAbout id="About"/>
    );
};

export default About;