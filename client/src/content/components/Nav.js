import React from "react"
import { Link } from 'react-router-dom';

function Nav(props) {



    return (
        <div className="nav">
            <div className="logobox">
                <Link to="/" className="logo1"><img src="./logo.png" className="logo"/></Link>
                
            </div>
            <div>
            <a href="" className="links">INSPIRATION</a>
                <a href="" className="links">FAQ</a>
                <a href="" className="links">ABOUT US</a>
            </div>
            <div className="btnbox">
                <Link to="/profile">PROFILE</Link>
                <a href="" className="links">LOG IN</a>
                <a href="" className="links">SIGN OUT</a>
                <a href="/signup" className="links">TRY NOW FREE</a>
            </div>
        </div>
    )
}

export default Nav;