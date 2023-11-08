import React,{useRef} from 'react';
import Intro from "./Intro/Intro";
import AboutMe from "./AboutMe/AboutMe";
import Skill from "./Skill/Skill";
import SelfIntro from './SelfIntro/SelfIntro';
import FuturePlan from './FuturePlan/FuturePlan';

const Main = () => {
    const element = useRef(null);
    const onMoveBox = () => {
        element.current.scrollIntoView({ behavior: "smooth", block: "start"});
    };
    /*내부에 요소들 위치*/ 
    return (
        <>
            <Intro onMoveBox={onMoveBox}/>
            <AboutMe element={element}/>
            <Skill/>
            <SelfIntro/>
            <FuturePlan/>
        </> 
    );
};

export default Main;