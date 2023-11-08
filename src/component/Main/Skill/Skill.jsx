import React from 'react';
import styled from "styled-components";
import images from "../../../data/images";
import './Skill.css';

const skills=[
    {
        id:1,
        name:"Frontend",
        count:3,
        url:[images.htmlCssJs,images.bootstrap,images.react]
    },
    {
        id:2,
        name:"Version",
        count:2,
        url:[images.github,images.git]
    },
    {
        id:3,
        name:"Certificate",
        count:1,
        url:[images.linux]
    }
]
const Box=styled.div`
    position:relative;
    background:white;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;

    width:100%;
    height:100%;
    margin:1rem;
    padding:1rem 2rem;
    border-radius:10px;

    transition:0.5s ease;
    &:hover{
        transform:translateY(-5%);
    }
`

const Skill = () => {
    return (
        <div className='app__main_skill'>
            <div className='app__main_skill-title'>
                <div className='app__main_skill-titleText p__title'>Skills</div>
                <div className='app__main_skill-titleBar'></div>
            </div>
            <div className='app__main_skill-content'>
                {
                    skills.map((skill,i)=>{
                        return(
                            <Box>
                                <div className='app__main_skill-content-titleBox'>
                                    <div className='app__main_skill-content-title p__title'>{skill.name}</div>
                                    <div className='app__main_skill-content-titleBar'></div>
                                </div>
                                <div className="app__main_skill-content-imgBox">
                                    {
                                        skill.url.map((img,i)=>{
                                            return(
                                                <img src={img} alt="skill"/>
                                            )
                                        })
                                    }
                                </div>
                            </Box>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Skill;