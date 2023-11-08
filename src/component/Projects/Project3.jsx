import React,{useState,useRef} from 'react';
import { BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import ReadMore from '../ReadMore/ReadMore';
import projects from '../../data/data';
const Project3 = () => {
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
                <div className='app__projects-content-title-item p__title'>3. Login & Register Site</div>
                <div className='app__projects-content-title-item p__title'>2022.12 ~ 2023.1</div>
                <div className='app__projects-content-title-item p__content'>로그인, 회원가입 기능을 간단하게 구현한 사이트</div>
                <div className='app__projects-content-title-item item-button'>
                    <button onClick={handleOpen} className='p__title'>More</button>
                </div>
            </div>
            <div className="app__projects-gallery">
                <div className="app__projects-gallery-container" ref={scrollRef}>
                    {projects[2].imgUrl.map((image,index)=>(
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
            {open&&<ReadMore content={projects[2]} setOpen={setOpen} open={open}/>}
        </>
    );
};

export default Project3;