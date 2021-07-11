import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timeStamp' , 'desc').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                
            })
        ))
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

        <FlipMove>
            {posts.map(({id, data:{displayName,userName,verified,text,avatar}}) => (
                <Post
                    key={id}
                    displayName={displayName}
                    userName={userName}
                    verified={verified}
                    text={text}
                    avatar={avatar}
                />
            ))}
            </FlipMove>

        </div>
    )
}

export default Feed
