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
                <IconButton variant="outlined" className="button-light">
                    <BorderColorOutlined/>
                </IconButton>
            </div>
            <div className="sidebar__threads">
                <SidebarThread/>
            </div>
            <div className="sidebar__bottom">
                <Avatar className="sidebar__avatar"/>
                <IconButton className="button-light">
                    <PhoneOutlined/>
                </IconButton>
                <IconButton className="button-light">
                    <QuestionAnswerOutlined/>
                </IconButton>
                <IconButton className="button-light">
                    <Settings/>
                </IconButton>
            </div>
        </aside>
    );
}

export default Sidebar;