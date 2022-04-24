import React from "react";
import "./SidebarThread.css";
import {Avatar} from "@mui/material";

function SidebarThread(props) {
    return (
        <div className="sidebarThread">
            <Avatar className="sidebarThread__avatar"/>
            <div className="sidebarThread__details">
                <h3>Message</h3>
                <p>Message info</p>
                <small className="sidebarThread__timestamp">timestamp</small>
            </div>
        </div>
    );
}

export default SidebarThread;