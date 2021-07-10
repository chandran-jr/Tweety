import React, {forwardRef} from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import PublishIcon from '@material-ui/icons/Publish';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

const Post = forwardRef(({displayName,userName,verified,text,avatar}) => {
    return (
        <div className="post">

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
                        <RepeatRoundedIcon className="post__footerReTweet"/>
                        <FavoriteBorderRoundedIcon className="post__footerLike"/>
                        <PublishIcon className="post__footerIcon"/>
                        <AssessmentOutlinedIcon className="post__footerIcon"/>
                    </div>

            </div>

            </div>
        </div>
    )
})

export default Post
