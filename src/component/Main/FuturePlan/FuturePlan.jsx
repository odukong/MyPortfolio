import React from 'react';
import {BsCheckSquareFill} from "react-icons/bs";
import "./FuturePlan.css";

const datas=[
    {
        name:'NOW',
        plans:['K-DUCK 구현','UMC 스터디','리액트 공식문서 공부'],
        color:"#F4CE6D"

    },    
    {
        name:'FUTURE',
        plans:['정보처리기사 자격증 취득','자바스크립트 코테','네이버 부스트캠프 준비','UMC 협업 프로젝트 진행'],
        color:"#B799C5"
    }
]

const PlanBox=({name,plans,color})=>{
    return(
        <div className='app__main_futurePlan-contentBox'>
            <div className='app__main_futurePlan-content-title'>
                <div className='content-title p__title' style={{background:`${color}`}}>{name}</div>
            </div>
            <div className='app__main_futurePlan-content-lists'>
                {plans.map((plan,i)=>{
                    return(
                        <div className='content-lists'>
                            <BsCheckSquareFill color="tomato" fontSize={30}/>
                            <div className='content-list p__content'>{plan}</div>
                        </div>
                    ) 
                })}
            </div>
        </div>
    );
}

const FuturePlan = () => {
    return (
        <div className='app__main_futurePlan'>
            <div className='app__main_futurePlan-titleBox'>
                <div className='app__main_futurePlan-title p__title'>Plan</div>
                <div className='app__main_futurePlan-titleBar'></div>
            </div>
            <div className='app__main_futurePlan-content'>
                {datas.map((data,i)=>{
                    return <PlanBox {...data} />
                })}
            </div>
        </div>
    );
};

export default FuturePlan;