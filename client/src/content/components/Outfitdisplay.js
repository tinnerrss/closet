import React from 'react'
import { Link } from 'react-router-dom';

function Outfitdisplay () {
    return (
        <div className="outfitdisplay">
            <div className="itemsnav">
            <Link to="/profile">Outerwear</Link>
            <Link to="/profile">Lounge</Link>
            <Link to="/profile">Tees</Link>
            <Link to="/profile">Blouses</Link>
            <Link to="/profile">Pants</Link>
            <Link to="/profile">Swimwear</Link>
            <Link to="/profile">Shoes</Link>
            <Link to="/profile">Accessories</Link>
            </div>
            <div className="outfits">
                CAROUSEL OF PREPICKED OUTFITS
            </div>
        </div>
    )
}

export default Outfitdisplay