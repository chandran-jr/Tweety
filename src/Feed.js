import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function Feed() {
    return (
        <div className="feed">

            <div className="feed__header">
            <h1>Home</h1>
            <StarBorderOutlinedIcon className="feed__sparkle"/>
            </div>

            <TweetBox />

        </div>
    )
}

export default Feed
