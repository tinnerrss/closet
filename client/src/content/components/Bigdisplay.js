import React from 'react'

function Bigdisplay() {
    return(
        <div className="bigdisplay">
            <div className="adbox">
                <div className="box1">
                    <h1 className="title"><span className="popcolor1">Always Wondering</span> <span className="popcolor2">What To Wear?</span></h1>
                    <h3>Now you don't have to.</h3>
                    <button className="signupbtn">TRY NOW FREE</button>
                    <p>Already have an account? <a href="" className="popcolor3">Sign in here</a></p>

                </div>
                <div className="iphone">
                    <img src="https://pngimg.com/uploads/iphone/iphone_PNG5735.png" className="phone1" />
                    <img src="./test.png" className="phone2" />
                </div>
                <div className="box2">
                    <h1 className="shoutout">NOW AVAILABLE ON IOS AND ANDROID</h1>
                    <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png" className="spoof" />
                </div>
            </div>
            <div className="displayimg">
                <img src="https://inspiration.cricut.com/wp-content/uploads/2019/01/DIY-Closet-Organization-Ideas-Hero.jpg" className="bigimg" />
            </div>
        </div>
    )
}

export default  Bigdisplay;