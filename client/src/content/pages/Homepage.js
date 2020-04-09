import React from 'react';
import Bigdisplay from '../components/Bigdisplay';
import Inspooutfit from '../components/Inspooutfits'

function Homepage() {
    return(
        <div className='homepage'>
            <Bigdisplay />
            <Inspooutfit />
        </div>
    )
}

export default Homepage;