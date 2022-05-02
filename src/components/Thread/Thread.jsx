import React from "react";
import {Avatar, IconButton} from "@mui/material";
import {MicNoneOutlined, MoreHoriz, SendRounded, TimerOutlined} from "@mui/icons-material";
import "./Thread.css";
import Message from "../Message/Message";

function Thread(props) {

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
            <div className="thread__messages">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
            <form method="POST" className="thread__input">
                <input type="text" placeholder="Write a message..." name="message"/>
                <IconButton className="button-light" type="button">
                    <TimerOutlined/>
                </IconButton>
                <IconButton className="button-light" type="submit">
                    <SendRounded/>
                </IconButton>
                <IconButton className="button-light" type="button">
                    <MicNoneOutlined/>
                </IconButton>
            </form>
        </div>
    );
}

export default Thread;