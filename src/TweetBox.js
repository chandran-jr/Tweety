import React from 'react';
import './TweetBox.css';
import {Button, Avatar} from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifIcon from '@material-ui/icons/Gif';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/govind_chandran.jpg"/>
                    <input placeholder="What's happening?" type="text"/>
                </div>

                <div className="tweetBox__icons">
                    <ImageOutlinedIcon className="tweetBox__icon"/>
                    <GifIcon className="tweetBox__icon"/>
                    <PollOutlinedIcon className="tweetBox__icon"/>
                    <SentimentSatisfiedOutlinedIcon className="tweetBox__icon"/>
                    <EventOutlinedIcon className="tweetBox__icon"/>
                </div>
                
                <Button className="tweetBox__Button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
