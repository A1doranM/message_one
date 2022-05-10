import React, {useState} from "react";
import {Avatar, IconButton} from "@mui/material";
import {MicNoneOutlined, MoreHoriz, SendRounded, TimerOutlined} from "@mui/icons-material";
import "./Thread.css";
import Message from "../Message/Message";
import {useDispatch} from "react-redux";

function Thread(props) {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const sendMessage = (e) => {
        e.preventDefault();


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
            <div className="thread__messages">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
            <form method="POST" className="thread__input" onClick={}>
                <input type="text" placeholder="Write a message..." name="message" value={message}/>
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