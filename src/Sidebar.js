import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core';



function Sidebar() {
    return (
        <div className="sidebar">

         <a href="https://tweety-e5e48.web.app/" ><TwitterIcon className="sidebar__twitterIcon" /> </a>

            <SidebarOption active Icon={HomeRoundedIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} title="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} title="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} title="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} title="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} title="More"/>
        
            <Button className="sidebar__TweetButton" fullWidth>Tweet</Button>
            
        </div>
    )
}

export default Sidebar
