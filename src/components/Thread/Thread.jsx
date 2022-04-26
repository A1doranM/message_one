import React, {useEffect, useState} from "react";
import {Avatar, IconButton} from "@mui/material";
import {MicNoneOutlined, MoreHoriz, SendRounded, TimerOutlined} from "@mui/icons-material";
import "./Thread.css";
import {useSelector} from "react-redux";
import {selectThreadId, selectThreadName} from "../../redux/reducers/ThreadSlice";
import {selectUser} from "../../redux/reducers/UsersSlice";

function Thread(props) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const threadId = useSelector(selectThreadId);
    const threadName = useSelector(selectThreadName);
    const user = useSelector(selectUser);

    const updateMessage = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = (e) => {
        e.preventDefault();
        setMessage("");
        sendMessageToThread(threadId, message, user);
    }

    useEffect(() => {
        if(threadId) {

        }
    }, []);

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
                <form method="POST" className="thread__input" onSubmit={sendMessage}>
                    <input type="text" placeholder="Write a message..." name="message" value={message}
                           onChange={updateMessage}/>
                    <IconButton className="button-light" type="submit">
                        <TimerOutlined/>
                    </IconButton>
                    <IconButton className="button-light" type="button">
                        <SendRounded/>
                    </IconButton>
                    <IconButton className="button-light" type="button">
                        <MicNoneOutlined/>
                    </IconButton>
                </form>
            </div>
        </div>
    );
}

export default Thread;