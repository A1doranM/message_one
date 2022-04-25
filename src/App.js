import Messenger from "./components/Messanger/Messenger";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import AuthGuard from "./components/authGuard/AuthGuard";

function App() {
    return (
        <AuthGuard
            children={
                <>
                    <Sidebar/>
                    <main>
                        <Messenger/>
                    </main>
                </>
            }
        />
    );
}

export default App;
