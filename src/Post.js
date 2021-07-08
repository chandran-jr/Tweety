import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Post({displayName,userName,verified,text,avatar}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/govind_chandran.jpg"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <h3 className="post__headerUsername">Govind B Chandran</h3>
                    <VerifiedUserIcon className="post__verified"/>
                </div>
                <div className="post__text">
                    <p>I'm Govind, The creator of Tweety, let's goo!</p>
                </div>
            </div>
        </div>
    )
}

export default Post
