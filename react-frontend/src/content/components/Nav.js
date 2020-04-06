import React from "react"

function Nav() {



    return (
        <div className="nav">
            <div className="logobox">
                <img src="./logo.png" className="logo"/>
                <a href="" className="links">INSPIRATION</a>
                <a href="" className="links">FAQ</a>
                <a href="" className="links">ABOUT US</a>
                
            </div>
            <div className="btnbox">
                <a href="">LOG IN</a>
                <button className="btn">TRY NOW FREE</button>
            </div>
        </div>
    )
}

export default Nav;