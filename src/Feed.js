import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Post from './Post';
import db from './firebase';

function Feed() {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => doc.data(),
                
            )
        )
        );
    },[]);

    return (
        <div className="feed">

        <div className="feed__sticky">

            <div className="feed__header">
            <h1>Home</h1>
            <StarBorderOutlinedIcon className="feed__sparkle"/>
            </div>

            <TweetBox />
            
            </div>

            {posts.map(({displayName,userName,verified,text,avatar}) => (
                <Post
                    displayName={displayName}
                    userName={userName}
                    verified={verified}
                    text={text}
                    avatar={avatar}
                />
            ))}

        </div>
    )
}

export default Feed
