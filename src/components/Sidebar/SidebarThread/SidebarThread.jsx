import React, {useEffect, useState} from "react";
import "./SidebarThread.css";
import {Avatar} from "@mui/material";
import {useDispatch} from "react-redux";
import {setThread} from "../../../redux/reducers/ThreadSlice";
import {getThreadById} from "../../../data_access_layer/threads/Threads";

function SidebarThread({id, threadName}) {
    const dispatch = useDispatch();
    const [threadInfo, setThreadInfo] = useState([]);

    useEffect(() => {
        const getThread = async () => {
            const data = await getThreadById(id);
            // setThreadInfo(data?.map((doc) => doc.data()));
            console.log(data);
        }
        getThread();
    }, [id]);

    const showThread = () => {
        dispatch(setThread({
            threadId: id,
            threadName: threadName
        }));
    }

    return (
        <div className="sidebar-thread"
             onClick={showThread}
        >
            <Avatar className="sidebar-thread__avatar"/>
            {/*<Avatar className="sidebar-thread__avatar" src{threadInfo[0]?.photo}/>*/}
            <div className="sidebar-thread__details">
                <h3>test</h3>
                {/*<h3>{threadName}</h3>*/}
                {/*<p>{threadInfo[0]?.message}</p>*/}
                {/*<small className="sidebar-thread__timestamp">{new Date(threadInfo[0]?.timestamp?.toDate())}</small>*/}
            </div>
        </div>
    );
}

export default SidebarThread;