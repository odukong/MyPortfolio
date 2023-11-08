import React from 'react';
import {BsGithub, BsX} from 'react-icons/bs';

import './ReadMore.css';

const ReadMore = (props) => {
    const handleClose=()=>{
        props.setOpen(false);
    }
    const moveGithub=()=>{
        window.open(props.content.url,'_blank');
    }
    return (
        <div className='app__projects-pop'>
            <div className="modal">
                <div className="modal-content">
                    <BsX onClick={handleClose} fontSize={40} color="black"/>
                    <div className='modal-content-text'>
                        <div className='content-name p__title'>{props.content.title}</div>
                        <div className='content-description p__content'>{props.content.description}</div>
                        <div className='content-skill p__content'>{props.content.skill}</div>
                        <div className="modal-link">
                            <BsGithub onClick={moveGithub} fontSize={30} color='grey'/>
                        </div>
                        <hr/>
                        <div className='content-pages'>
                            {props.content.pages.map((page,i)=>(
                                <div className='content-page'>
                                    <div className='content-page-title p__title'>{i+1}.{page[0]}</div>
                                    <div className='content-page-description p__content'>{page[1]}</div>
                                </div>
                            ))}
                        </div>
                        <div className='content-imgs'>
                            {
                                props.content.imgUrl.map((img,i)=>(
                                    <img src={img} alt="프로젝트"/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadMore;