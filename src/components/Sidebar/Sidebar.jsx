import React, {useEffect, useState} from "react";
import "./Sidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import {
    BorderColorOutlined,
    PhoneOutlined,
    QuestionAnswerOutlined,
    Settings
} from "@mui/icons-material";
import {Avatar, IconButton} from "@mui/material";
import SidebarThread from "./SidebarThread/SidebarThread";
import {signOutUser} from "../../data_access_layer/auth/Authentication";
import {createThread, getThreads} from "../../data_access_layer/threads/Threads";

function Sidebar(props) {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await getThreads();
            if(result.length) {
                const threads = result.map((thread) => {
                    return {
                        id: thread.id,
                        data: thread,
                    };
                });
                setThreads(threads);
            }
        }
        getData();
    }, []);

    const addThread = () => {
        const threadName = prompt("Enter a thread name.");
        if (threadName) {
            createThread(threadName);
        }
    }

    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className="sidebar__searchIcon"/>
                    <input type="text" placeholder="Search" className="sidebar__input"/>
                </div>
                <IconButton variant="outlined" className="button-light" onClick={addThread}>
                    <BorderColorOutlined/>
                </IconButton>
            </div>
            <div className="sidebar__threads">
                {threads.map(thread => <SidebarThread key={thread.id} id={thread.id}
                                                      threadName={thread.data.threadName}/>)}
            </div>
            <div className="sidebar__bottom">
                <Avatar className="sidebar__avatar" onClick={signOutUser}/>
                <IconButton className="button-light">
                    <PhoneOutlined/>
                </IconButton>
                <IconButton className="button-light">
                    <QuestionAnswerOutlined/>
                </IconButton>
                <IconButton className="button-light">
                    <Settings/>
                </IconButton>
            </div>
        </aside>
    );
}

export default Sidebar;