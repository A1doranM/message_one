import React from "react";
import "./Messenger.css";
import Thread from "../Thread/Thread";

function Messenger(props) {

    return (
        <main className="messenger">
            <Thread/>
        </main>
    );
}

export default Messenger;