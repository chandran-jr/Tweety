import React, { useState } from 'react';
import './TweetBox.css';
import {Button, Avatar} from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifIcon from '@material-ui/icons/Gif';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import firebase from 'firebase';
import db from './firebase';

function TweetBox() {

    const [tweet,setTweet] = useState("");
    const [name,setName] = useState("");
    const [user,setUser] = useState("");


    const sendTweet = (e) => {
        e.preventDefault();
        if(tweet === "" || user ==="" || name === "") {
            alert("Please enter all the fields");    
        }
        else {
        db.collection('posts').add({
            displayName: name,
            userName: "@"+user,
            verified: false,
            text: tweet,
            avatar: "https://i.pinimg.com/originals/11/05/0c/11050c5daab38e515f788abbf474e795.jpg",
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setTweet("");
        setName("");
        setUser("");
    }}

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://i.pinimg.com/originals/11/05/0c/11050c5daab38e515f788abbf474e795.jpg"/>
                    <input required onChange={(e) => setTweet(e.target.value)} value={tweet} placeholder="What's happening?" type="text"/>
                    <input required onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter your name" type="text"/>
                    <input required onChange={(e) => setUser(e.target.value)} value={user} placeholder="Enter your username " type="text"/>
                </div>

                <div className="tweetBox__icons">
                    <ImageOutlinedIcon className="tweetBox__icon"/>
                    <GifIcon className="tweetBox__icon"/>
                    <PollOutlinedIcon className="tweetBox__icon"/>
                    <SentimentSatisfiedOutlinedIcon className="tweetBox__icon"/>
                    <EventOutlinedIcon className="tweetBox__icon"/>

                    <div className="tweetBox__ButtonDiv"> 
                    <Button type="submit" onClick={sendTweet} className="tweetBox__Button">Tweet</Button>
                    </div>   

                </div>
            </form>
        </div>
    )
}

export default TweetBox
