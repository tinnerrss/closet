import React from 'react';
import Bigdisplay from '../components/Bigdisplay';
import Inspooutfit from '../components/Inspooutfits'
// import Reviews from '../components/Reviews'

function Homepage() {
    return(
        <div className='homepage'>
            <Bigdisplay />
            {/* <Reviews /> */}
            <Inspooutfit />
        </div>
    )
}

export default Homepage;