import Messenger from "./components/Messanger/Messenger";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";

function App() {
    return (
        <>
            <Sidebar/>
            <main>
                <Messenger/>
            </main>
        </>
    );
}

export default App;
