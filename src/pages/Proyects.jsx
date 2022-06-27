import React from "react";
import MainProyects from "../containers/MainProyects";

const Proyects = () =>{

    React.useEffect( () => {
        window.scrollTo(0,0)
    }, []);

    return(
        <MainProyects/>
    );
}

export default Proyects;
