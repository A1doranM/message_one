import React from "react";
import "./Messenger.css";
import Thread from "../Thread/Thread";

function Messenger(props) {

    return (
        <div className="messenger">
            <Thread/>
        </div>
    );
}

export default Messenger;