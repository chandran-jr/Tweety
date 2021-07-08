import React from 'react';
import './TweetBox.css';
import {Button, Avatar} from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/govind_chandran.jpg"/>
                    <input placeholder="What's happening?"/>
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
