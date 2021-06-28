import React from 'react';
import './SidebarOption.css';

function SidebarOption({active, Icon, title}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption__active'}`}>
            <Icon/>
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarOption
