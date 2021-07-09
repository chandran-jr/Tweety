import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

function Post({displayName,userName,verified,text,avatar}) {
    return (
        <div className="post">

            <div className="post__avatar">
                <Avatar src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/govind_chandran.jpg"/>
            </div>

            <div className="post__body">

                <div className="post__header">
                    <h3>Govind B Chandran</h3>
                    <CheckCircleIcon className="post__verified"/>
                    <h4>@GovindChandran</h4>
                </div>

            <div className="post__text">
                    <p>I'm Govind, the creator of Tweety, let's goo!</p>

                    <div className="post__footer">
                        <ChatBubbleOutlineOutlinedIcon className="post__footerIcon"/>
                        <RepeatRoundedIcon className="post__footerIcon"/>
                        <FavoriteBorderRoundedIcon className="post__footerIcon"/>
                        <CloudUploadOutlinedIcon className="post__footerIcon"/>
                        <AssessmentOutlinedIcon className="post__footerIcon"/>
                    </div>

            </div>

            </div>
        </div>
    )
}

export default Post
