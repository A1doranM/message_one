import {auth, provider} from "../firebase";
import {signInWithPopup, signOut} from "firebase/auth";

export async function signInUserByGoogle() {
    try {
        return await signInWithPopup(auth, provider);
    } catch (err) {
        console.log(err);
    }
}

export function signOutUser() {
    signOut(auth)
        .catch((err) => {
            console.log(err);
        });
}

