import {useState} from 'react';

//asets de SkillsTarjets
import gitIcon from '../../assets/icons/git-icon.png';
import htmlIcon from '../../assets/icons/html5-icon.png';
import javascriptIcon from '../../assets/icons/javascript-icon.png';
import webpackIcon from '../../assets/icons/webpack-icon.png';
import npmIcon from '../../assets/icons/npm-icon.png';
import reactIcon from '../../assets/icons/react-icon.png';
import vscodeIcon from '../../assets/icons/vscode-icon.png';
import cssIcon from '../../assets/icons/css3-icon.png';

//assets de MainTarjet
import githubIcon from '../../assets/icons/github-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';

//assets de MainProyects
import  platziVideoCover from '../../assets/images/PlatziVideoProyect.jpeg';


const initialState = {
    mobileMenu: false,

    // elementsButtons:{
    //     github:{
    //         src:githubIcon,
    //         name:"Github",
    //         url:"https://github.com/Aquillare",
    //     },
    //     linkedin:{
    //         src:linkedinIcon,
    //         name:"Linkedin",
    //     },    
    // },

    // SkillsElements:[
    //     {
    //         id:1,
    //         name:'Git',
    //         src:gitIcon,
    //     },
    //     {
    //         id:2,
    //         name:'HTML5',
    //         src:htmlIcon,
    //     },
    //     {
    //         id:3,
    //         name:'Javascript',
    //         src:javascriptIcon,
    //     },
    //     {
    //         name:'Webpack',
    //         src:webpackIcon,
    //     },
    //     {
    //         id:4,
    //         name:'NPM',
    //         src:npmIcon,
    //     },
    //     {
    //         id:5,
    //         name:'React',
    //         src:reactIcon,
    //     },
    //     {
    //         id:6,
    //         name:'VS Code',
    //         src:vscodeIcon,
    //     },
    //     {
    //         id:7,
    //         name:'CSS3',
    //         src:cssIcon,
    //     },
    // ],

    // proyects:[
    //     {
    //         id:1,
    //         title:"Platzi Video",
    //         description:"Descripcion del proyecto",
    //         tecnologies:"Tecnologias usadas",
    //         cover:platziVideoCover,
    //     },

    //     {
    //         id:2,
    //         title:"Platzi Video",
    //         description:"Descripcion del proyecto",
    //         tecnologies:"Tecnologias usadas",
    //         cover:platziVideoCover,
    //     },

    //     {
    //         id:3,
    //         title:"Platzi Video",
    //         description:"Descripcion del proyecto",
    //         tecnologies:"Tecnologias usadas",
    //         cover:platziVideoCover,
    //     }
    // ],
 

};

const useInitialState = () =>{
    const [state, setState] = useState(initialState);

    const mobileMenuHidden = () => {
        setState({
            ...state,
            mobileMenu: false,
        });
    };
    
    const mobileMenuShow = () => {
        setState({
            ...state,
            mobileMenu:true,
        });
    };

    return{
        state,
        mobileMenuHidden,
        mobileMenuShow,
    };
};


export default useInitialState;