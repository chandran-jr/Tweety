import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';

function Post({displayName,userName,verified,text,avatar}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/govind_chandran.jpg"/>
            </div>
        </div>
    )
}

export default Post
