import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';



function Sidebar() {
    return (
        <div className="sidebar">

            <TwitterIcon/>

            <SidebarOption Icon={HomeRoundedIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} title="Notifications"/>
            <SidebarOption Icon={SearchIcon} title="Explore"/>
            <SidebarOption Icon={SearchIcon} title="Explore"/>
            <SidebarOption Icon={SearchIcon} title="Explore"/>
            <SidebarOption Icon={SearchIcon} title="Explore"/>
            <SidebarOption Icon={SearchIcon} title="Explore"/>

            
        </div>
    )
}

export default Sidebar
