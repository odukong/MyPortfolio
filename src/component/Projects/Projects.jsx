import React,{useState} from 'react';
import Nav from "../Nav/Nav";
import projects from '../../data/data';
import Login from "./Login";
import './Projects.css';

const Projects = () => {
    const [index,setIndex]=useState(0);
    const contentChange=(e)=>{
        const newIndex=e.target.value;
        setIndex(newIndex-1);
    }

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const changeId = (e) => {
      setId(e.target.value);
    };
    const changePwd = (e) => {
      setPwd(e.target.value);
    };
    if (id === "ohbin" && pwd === "1017"){
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
    }
    else{
        return(
            <>
                <Nav/>
                <Login id={id} pwd={pwd} changeId={changeId} changePwd={changePwd} />
            </>
        )
    }
};

export default Projects;

