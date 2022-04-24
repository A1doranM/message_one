import React from "react";
import "./Sidebar.css";
import SearchIcon from '@mui/icons-material/Search';
import {BorderColorOutlined} from "@mui/icons-material";
import {IconButton} from "@mui/material";

function Sidebar(props) {
    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className="sidebar__searchIcon"/>
                    <input type="text" placeholder="Search" className="sidebar__input"/>
                </div>
                <IconButton variant="outlined" id="sidebar__button">
                    <BorderColorOutlined/>
                </IconButton>
            </div>
            <div className="sidebar__threads"></div>
            <div className="sidebar__bottom"></div>
        </aside>
    );
}

export default Sidebar;