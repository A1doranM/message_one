import React from 'react';
import {useSelector} from "react-redux";
import {selectUser} from "../../redux/reducers/UsersSlice";
import {Avatar} from "@mui/material";

function Message() {
    const user = useSelector(selectUser);

    return (
        <div
            className={"message"}
        >
            <Avatar src={photo} className="message__photo" />
            <div className="message__contents">
                <p>{message}</p>
                <small>{new Date(timestamp?.toDate())}</small>
            </div>
        </div>
    );
}

export default Message;