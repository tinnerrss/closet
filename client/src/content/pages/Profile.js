import React, {useState, useEffect} from 'react';
import Newitem from "../components/Newitem";
import Itemsnav from "../components/Itemsnav";
import Categorydisplay from "../components/Categorydisplay";
import { Redirect } from 'react-router-dom';
import axios from 'axios'


function Profile(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/items`)
        .then(response => {
          props.setItems({ items: response.data });
        })
        .catch(error => {
          console.log(error);
        });
      }, [])
    if (!props.user && !props.token) return <Redirect to='/' />

    //query database for all items
    //store into variable
    //

    return (
        <div className="profile">
            <Itemsnav />
            <div className="profbox">
                <Newitem items={items} setItems={setItems}/>
                <Categorydisplay items={items} setItems={setItems}/>
            </div>
        </div>
    )
}

export default Profile;