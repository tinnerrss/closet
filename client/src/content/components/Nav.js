import React from "react"
import { Link } from 'react-router-dom';

function Nav(props) {



    return (
        <div className="nav">
            <div className="logobox">
                <Link to="/" className="logo1"><img src="./darklogo.png" className="logo"/></Link>
                
            </div>
            <div class="dropdown">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" className="menuicon" />
                <div class="dropdown-content">
                <Link to="/profile" className="dropnav">PROFILE</Link>
                <Link to="/auth/login" className="dropnav">LOG IN</Link>
                <Link to="/auth/signup" className="dropnav">TRY NOW FREE</Link>
                {props.user ? <span onClick={props.logout}>Logout</span> : ''}
                </div>
            </div>
            {/* <div className="navtest"> 
            <a href="" className="links">INSPIRATION</a>
                <a href="" className="links">FAQ</a>
                <a href="" className="links">ABOUT US</a>
            </div> */}
            <div className="btnbox">
                <Link to="/profile">PROFILE</Link>
                <Link to="/auth/login">LOG IN</Link>
                {props.user ? <span onClick={props.logout}>Logout</span> : ''}
                <Link to="/auth/signup" className="cta">TRY NOW FREE</Link>
            </div>
        </div>
    )
}

export default Nav;