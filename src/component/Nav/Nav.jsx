import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {BsList,BsHouseDoorFill,BsStickyFill,BsFillBookFill,BsX} from "react-icons/bs"; 
import "./Nav.css";

const Nav = () => {
    const [toggleMenu,setToggleMenu]=useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(prevToggleMenu => !prevToggleMenu);
        console.log(toggleMenu);
    };
    return (
        <div className={`app__navbar ${toggleMenu&&"show"}`}>
            <div className="app__navbar-smallscreen-overlay">
                <ul className="app__navbar-smallscreen-links">
                    <li className="app__navbar-smallscreen-items">
                        <BsHouseDoorFill color="##383838" fontSize={30}/>
                        {toggleMenu&&<div className='app__navbar-smallscreen-item p__title'><Link to="/">Home</Link></div>}
                    </li>
                    <li className="app__navbar-smallscreen-items">
                        <BsStickyFill color="##383838" fontSize={30}/>
                        {toggleMenu&&<div className='app__navbar-smallscreen-item p__title'><Link to="/project">Project</Link></div>}
                    </li>
                    <li className="app__navbar-smallscreen-items">
                        <BsFillBookFill color="##383838" fontSize={30}/>
                        {toggleMenu&&<div className='app__navbar-smallscreen-item p__title'><Link to="/career">Career</Link></div>}
                    </li>
                </ul>
            </div>
            {
                toggleMenu?<BsX color="white" fontSize={50} onClick={handleToggleMenu}/>:
                <BsList color="white" fontSize={50} onClick={handleToggleMenu}/>
            }
        </div>
    )
};

export default Nav;