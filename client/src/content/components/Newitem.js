import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Newitem (props) {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [available, setAvailable] = useState(false)

    const handleItemSubmit = e => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER_URL}/items`, {name, image, category, available}, {headers:{'Authorization':`Bearer ${props.token}`}})
        .then(response => {
            if(response.data.item) {
                props.setItems([...props.items, response.data.item])
                setImage('')
                setName('')
                setCategory('')
                setAvailable(false)
            } else {
                console.log(response.data)
            }
        }).catch(error => console.log(error)) 
    }

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'closet')
        setLoading(true)
        const res = await fetch('https://api.cloudinary.com/v1_1/tin/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        console.log(file)
        setImage(file.secure_url)
        setLoading(false)

        
    }

    return (
        <div className="newitem">
            <h1>Add A New Item</h1>
            <form className="addform" onSubmit={handleItemSubmit}>
                <input className="addinput" required type="text" name="name" placeholder="Item Name" onChange={e=>setName(e.target.value)} />      
                <input className="addinput" required type="text" name="category" placeholder="Category" onChange={e=>setCategory(e.target.value)} />
                <label>Available</label>
                <input required type="radio" name="available" onChange={e=>setAvailable(true)} />
                {/* <label><h1>Upload Image</h1></label> */}
                <input className="test" type="file" name="file" placeholder="upload image" onChange={uploadImage} />
                {loading ? (<h3>Loading...</h3>) : (<img src={image}className="cloudimg" />)}
                <input type="submit" value="Add Item" />
            </form>
        </div>
  
    )
}

export default Newitem