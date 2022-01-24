import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase/compat/app'

function MessageSender() {
    const [input, setInput] = useState('');
    const[imageUrl,setImageUrl] = useState('');
    const[{user},dispatch] = useStateValue();
   

    const handleSubmit = (e) => {
        e.preventDefault();
        
        db.collection("posts").add({
            message :  input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            userName : user.displayName,
            image : imageUrl


        })

        setInput('');
        setImageUrl('');
    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form action="">
                    <input
                        value={input}
                        onChange={e=>setInput(e.target.value)}
                        className="messageSender_input"
                        placeholder={`What's on your mind?,${user.displayName}`}
                    />
                    <input 
                    value={imageUrl}
                    onChange={e=>setImageUrl(e.target.value)}
                    className="" 
                    placeholder="image URL(Optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Feed</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
