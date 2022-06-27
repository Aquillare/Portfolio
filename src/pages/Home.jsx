import React from "react";
import MainTarjet from "../containers/MainTarjet";
import '../styles/Home.css';


const Home = () => {

    React.useEffect( () => {

        //scrollTo nos permite que al llamarse este componente, el usuario
        //puededa visualizar la pagina desde su inicio. o desde el punto que necesitemos definir.
        window.scrollTo(0,0)
    }, []);

    return(
        <div className="home">
            <MainTarjet/>
        </div>
    );
   
};   

export default Home;