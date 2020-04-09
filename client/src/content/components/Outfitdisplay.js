import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Outfitdisplay (props) {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

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

        setImage(file.secure_url)
        setLoading(false)
    }

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
                <div className="uploader">
                    <h1>Upload Image</h1>
                    <input type="file" name="file" placeholder="upload image" onChange={uploadImage} />
                </div>
                <div className="displaycloudimg">
                    {loading ? (<h3>Loading...</h3>) : (<img src={image}className="cloudimg" />)}
                </div>
            </div>
        </div>
    )
}

export default Outfitdisplay