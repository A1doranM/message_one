import {auth, provider} from "../firebase";
import {signInWithPopup, signOut} from "firebase/auth";

export async function signInUserByGoogle() {
    try {
        const result = await signInWithPopup(auth, provider)
        return result;
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

