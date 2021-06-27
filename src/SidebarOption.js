import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title}) {
    return (
        <div className="sidebarOption">
            <Icon/>
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarOption
