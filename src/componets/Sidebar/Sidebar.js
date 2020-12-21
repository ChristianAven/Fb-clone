import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from "../StateProvider";
import "./Sidebar.css"


const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} tittle={user.displayName}/>
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
