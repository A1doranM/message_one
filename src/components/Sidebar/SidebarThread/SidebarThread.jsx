import React from "react";
import "./SidebarThread.css";
import {Avatar} from "@mui/material";

function SidebarThread(props) {
    return (
        <div className="sidebar-thread">
            <Avatar className="sidebar-thread__avatar"/>
            <div className="sidebar-thread__details">
                <h3>Message</h3>
                <p>Message info</p>
                <small className="sidebar-thread__timestamp">timestamp</small>
            </div>
        </div>
    );
}

export default SidebarThread;