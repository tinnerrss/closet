import React from 'react'

function Categorydisplay(props) {
    const category = 'Outerwear'
    const items = []

    let itemlist = items.length < 1 ?
    <h3>You have no items to show. Add items now! </h3> :
    items.map((items, i) => (
        <div key={`itemslistitem=${i}`}>
            <div className="catcontainer">
                <img src={items.photo} className="image"/>
                <div className="overlay">
                    <div className="text">
                        <h3 className="block">Item Name: {items.name}</h3>
                        <h3 className="block">In the Closet?: {items.available}</h3>
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div clasName="categorydisplay">
            <h1>{items.category}</h1>
            {itemlist}
        </div>
    )
}

export default Categorydisplay