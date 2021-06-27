import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';



function Sidebar() {
    return (
        <div className="sidebar">

            <TwitterIcon/>

            <SidebarOption icon={HomeRoundedIcon} title="Home"/>
            <SidebarOption icon={SearchIcon} title="Explore"/>

            
        </div>
    )
}

export default Sidebar
