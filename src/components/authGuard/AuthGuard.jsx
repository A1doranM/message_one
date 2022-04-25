import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "../../redux/reducers/UsersSlice";
import Login from "../Login/Login";
import {auth} from "../../data_access_layer/firebase";

function AuthGuard({children}) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();



    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
           if(authUser) {
               dispatch(login({
                   uid: authUser.uid,
                   photo: authUser.photoURL,
                   email: authUser.email,
                   displayName: authUser.displayName
               }))
           } else {
               dispatch(logout())
           }
        });
    }, [dispatch]);

    return (
        <>
            {user ? children : <Login/>}
        </>
    );
}

export default AuthGuard;