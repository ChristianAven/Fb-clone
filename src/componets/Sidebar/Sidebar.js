import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import "./Sidebar.css"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src='https://avatars3.githubusercontent.com/u/60729261?s=60&v=4' tittle='User name'/>
            <SidebarRow Icon={LocalHospitalIcon} tittle='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} tittle='Pages'/>
            <SidebarRow Icon={PeopleIcon} tittle='Friends'/>
            <SidebarRow Icon={ChatIcon} tittle='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} tittle='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} tittle='Videos'/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} tittle='Marketplace'/>
        </div>
    )
}

export default Sidebar
