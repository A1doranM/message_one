import React from "react";
import "./Sidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import {
    BorderColorOutlined,
    PhoneOutlined,
    QuestionAnswer,
    QuestionAnswerOutlined,
    Settings
} from "@mui/icons-material";
import {Avatar, IconButton} from "@mui/material";
import SidebarThread from "./SidebarThread/SidebarThread";

function Sidebar(props) {
    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className="sidebar__searchIcon"/>
                    <input type="text" placeholder="Search" className="sidebar__input"/>
                </div>
                <IconButton variant="outlined" className="sidebar__button">
                    <BorderColorOutlined/>
                </IconButton>
            </div>
            <div className="sidebar__threads">
                <SidebarThread/>
            </div>
            <div className="sidebar__bottom">
                <Avatar className=""/>
                <IconButton className="sidebar__button">
                    <PhoneOutlined/>
                </IconButton>
                <IconButton className="sidebar__button">
                    <QuestionAnswerOutlined/>
                </IconButton>
                <IconButton className="sidebar__button">
                    <Settings/>
                </IconButton>
            </div>
        </aside>
    );
}

export default Sidebar;