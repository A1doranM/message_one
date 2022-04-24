import React, {useState} from "react";
import "./Thread.css";
import {Avatar, IconButton} from "@mui/material";
import {MoreHoriz} from "@mui/icons-material";

function Thread(props) {
    const [message, setMessage] = useState("");

    const updateMessage = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = (e) => {
        e.preventDefault();
        setMessage("");
    }

    return (
        <div className="thread">
            <div className="thread-header">
                <div className="thread-header__contents">
                    <Avatar/>
                    <div className="thread-header__contents-info">
                        <h3>Thread name</h3>
                        <h4>Last seen</h4>
                    </div>
                </div>
                <IconButton className="button-light">
                    <MoreHoriz/>
                </IconButton>
            </div>
            <div className="thead__messages">
                <form method="POST" className="thread__input" onSubmit={updateMessage}>
                    <input type="text" placeholder="Write a message..." name="message" value={message}
                           onChange={setMessage}/>
                    <button type="submit">Send a message</button>
                </form>
            </div>
        </div>
    );
}

export default Thread;