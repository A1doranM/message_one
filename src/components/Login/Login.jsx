import React from "react";
import "./Login.css";
import {Button} from "@mui/material";
import {signInUserByGoogle} from "../../data_access_layer/auth/Authentication";

function Login(props) {

    const signIn = async (e) => {
        e.preventDefault();
        const result = await signInUserByGoogle();
        console.log(result);
    }

    return (
        <div className="login">
            <div className="login__message-one">
                <img src="" alt=""/>
                <h1>Message One</h1>
            </div>
            <Button className="login__button" onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;