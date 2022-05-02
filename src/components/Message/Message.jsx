import React from 'react';
import "./Message.css";
import {Avatar} from "@mui/material";

function Message() {

    return (
        <div
            className="message"
        >
            <Avatar className="message__photo"/>
            <div className="message__contents">
                <p className="message__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                    adipisci doloribus enim eveniet necessitatibus neque nesciunt sed! Aliquam ipsam iusto optio quaerat
                    velit. Dicta inventore ipsa repudiandae sequi! Deleniti, repudiandae.</p>
                <small className="message__timestamp">{Date.now()}</small>
            </div>
        </div>
    );
}

export default Message;