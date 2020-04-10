import React from 'react'

function Reviews() {
    return(
        <div className="reviews">
            <div className="reviewrow">
                <img src="./me.png" className="reviewpic"/>
                <p className="review">
                    " I have a shopping problem. And sometimes I buy the same items twice because I forgot that I already own them! Having this app is sooo helpful, and it's incredibly useful when it's time for a purge! "
                </p>
            </div>
            <div className="reviewrow">
                <p className="review">
                    " Since I live in such a bi-polar weathered state, this app helps me "
                </p>
                <img src="./chad.png" className="reviewpic"/>
            </div>
        </div>
    )
}

export default Reviews