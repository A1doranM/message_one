import Messenger from "./components/Messanger/Messenger";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <main>
                <Messenger/>
            </main>
        </div>
    );
}

export default App;
