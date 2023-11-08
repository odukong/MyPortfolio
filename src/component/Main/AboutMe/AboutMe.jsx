import React from 'react';
import { BsGithub } from 'react-icons/bs';
import images from "../../../data/images";
import './AboutMe.css';

const AboutMe = (props) => {
    const handleGithub=()=>{
        window.open("https://github.com/odukong","_blank");
    }
    return (
        <div className='app__main_aboutme' ref={props.element}>
            <div className='app__main_aboutme-img'>
                <img src={images.myProfile} alt="profile"/>
            </div>
            <div className='app__main_aboutme-content'>
                <div className='app__main_aboutme-title p__content'>
                    오수빈
                </div>
                <div className='app__main_aboutme-title p__content'>
                    2002.10.17.<br/>
                    Front-end Developer
                </div>
                <div className='app__main_aboutme-sub'>
                    <div className="app__main_aboutme-box">
                        <div className='app__main_aboutme-boxContent p__content'>Gachon Univ.<br/>Computer Science 3rd</div><br/>
                        <div className='app__main_aboutme-boxContent p__content'>4.44 / 4.5</div>
                        <div className='app__main_aboutme-boxContent p__content'><BsGithub color="grey" fontSize={30} onClick={handleGithub}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default AboutMe;