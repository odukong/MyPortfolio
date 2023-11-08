import React,{useState,useRef} from 'react';
import { BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import ReadMore from '../ReadMore/ReadMore';
import projects from '../../data/data';
const Project1 = () => {
    const [open,setOpen]=useState(false)
    const scrollRef=useRef(null);
    const handleOpen=()=>{
        setOpen(prev=>!prev);
    }
    
    const scroll=(direction)=>{
        const {current}=scrollRef;
    
        if(direction==='left'){
            current.scrollLeft-=300;
        }else if(direction==='right'){
            current.scrollLeft+=300;
        }
    }
    return (
        <>
            <div className='app__projects-content-title'>
                <div className='app__projects-content-title-item p__title'>1. K-DUCK</div>
                <div className='app__projects-content-title-item p__title'>2023.9 ~ </div>
                <div className='app__projects-content-title-item p__content'>K-POP 덕질을 위한 사이트</div>
                <div className='app__projects-content-title-item item-button'>
                    <button onClick={handleOpen} className='p__title'>More</button>
                </div>
            </div>
            <div className="app__projects-gallery">
                <div className="app__projects-gallery-container" ref={scrollRef}>
                    {projects[0].imgUrl.map((image,index)=>(
                    <div className="app__projects-gallery-card flex__center" key={index}>
                        <img src={image} alt="gallery"/>
                    </div>
                    ))}
                </div>
                <div className="app__projects-gallery-arrows">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll('left')} fontSize={30}/>
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll('right')} fontSize={30}/>
                </div>
            </div>
            {open&&<ReadMore content={projects[0]} setOpen={setOpen} open={open}/>}
        </>
    );
};

export default Project1;