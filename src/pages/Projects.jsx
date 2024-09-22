import React from "react";
import MainProjects from "../containers/MainProjects";

const Projects = () =>{

    React.useEffect( () => {
        window.scrollTo(0,0)
    }, []);

    return(
        <MainProjects/>
    );
}

export default Projects;
