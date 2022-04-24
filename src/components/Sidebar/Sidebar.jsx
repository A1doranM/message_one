import React from "react";
import "./Sidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import {BorderColorOutlined} from "@mui/icons-material";
import {IconButton} from "@mui/material";
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
                <SidebarThread/>
                <SidebarThread/>
            </div>
            <div className="sidebar__bottom"></div>
        </aside>
    );
}

export default Sidebar;