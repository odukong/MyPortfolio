import React,{useState,useEffect} from 'react';
import {BsArrowDownCircle} from "react-icons/bs";
import './Intro.css';
const Intro = (props) => {
    const text="안녕하세요\n Front-end 개발자 오수빈입니다";
    const [title,setTitle]=useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        const typing = setInterval(() => {
            setTitle(prevTitle => prevTitle + text[count]);
        
            if (count < text.length - 1) {
                setCount(prevCount => prevCount + 1);
            } else {
                clearInterval(typing);
            }
            }, 100);
        
        return () => {
        clearInterval(typing);
        };
    }, [count]);
    return (
        <div className='app__main_intro'>
            <div className='app__main_intro-content'>
                <div className='app__main_intro-greeting p__title'>
                    {title}
                </div>
                <div className='app__main_intro-down' onClick={props.onMoveBox}>
                    <BsArrowDownCircle color="white" fontSize={40}/>
                </div>
            </div>
        </div>
        
    );
};

export default Intro;