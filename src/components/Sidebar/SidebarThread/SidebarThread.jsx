import React from "react";
import "./SidebarThread.css";
import {Avatar} from "@mui/material";
function SidebarThread() {

    return (
        <div className="sidebar-thread">
            <Avatar className="sidebar-thread__avatar"/>
            <div className="sidebar-thread__body">
                <h3>test</h3>
                <div className="sidebar-thread__details">
                    <p>Test Message</p>
                    <small className="sidebar-thread__timestamp">{Date.now()}</small>
                </div>
            </div>
        </div>
    );
}

export default SidebarThread;