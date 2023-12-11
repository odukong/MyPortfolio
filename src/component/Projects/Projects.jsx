import React,{useState} from 'react';
import Nav from "../Nav/Nav";
import projects from '../../data/data';
import './Projects.css';

const Projects = () => {
    const [index,setIndex]=useState(0);
    const contentChange=(e)=>{
        const newIndex=e.target.value;
        setIndex(newIndex-1);
    }

    
    return (
        <>
            <Nav/>
            <div className='app__projects'>
                <div className='app__projects-title'>
                    <div className='app__projects-main-title p__title'>Projects</div>
                    <div className='app__projects-title-bar'></div>
                </div>
                <div className='app__projects-tabs'>
                    {
                        projects.map((project,i)=>(
                            <button key={i} onClick={contentChange} value={project.id} className={`p__title ${index === project.id-1 && 'active'}`} >
                                {project.id}
                            </button>
                        ))
                    }
                </div>
                <div className='app__projects-content' style={{color:"white"}}>
                    {projects[index].content}
                </div>
            </div> 
        </>
    )
    
};

export default Projects;

