import React, {forwardRef, useState} from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import PublishIcon from '@material-ui/icons/Publish';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';

const Post = forwardRef(({displayName,userName,verified,text,avatar}, ref) => {

    const [hearted,setHearted] = useState(false);
    const [retweeted,setRetweeted] = useState(false);

    return (
        <div className="post" ref={ref}>

            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>

            <div className="post__body">

                <div className="post__header">
                    <h3>{displayName}</h3>
                  {verified &&  <CheckCircleIcon className="post__verified"/> }
                    <h4>{userName}</h4>
                </div>

            <div className="post__text">
                    <p>{text}</p>

                    <div className="post__footer">
                        <ChatBubbleOutlineOutlinedIcon className="post__footerIcon"/>
                        {retweeted? (<RepeatOneIcon onClick={e => setRetweeted(false)} className="post__footerReTweet"/>) : (<RepeatRoundedIcon onClick={e => setRetweeted(true)} className="post__footerReTweet"/>)}
                        {hearted? (<FavoriteIcon onClick={e => setHearted(false)} className="post__footerLike"/>) : (<FavoriteBorderRoundedIcon onClick={e => setHearted(true)} className="post__footerLike"/>)}
                        <PublishIcon className="post__footerIcon"/>
                        <AssessmentOutlinedIcon className="post__footerIcon"/>
                    </div>

            </div>

            </div>
        </div>
    )
})

export default Post
