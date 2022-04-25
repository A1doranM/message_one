import db from "../firebase";
import {collection, getDocs, addDoc} from "firebase/firestore";

export async function getThreads() {
    try {
        const querySnapshot = await getDocs(collection(db, "threads"));
        const threads = querySnapshot.docs.map(doc => doc.data());
        return threads;
    } catch (err) {
        console.log(err);
    }
}

export async function createThread(threadName) {
    try {
        await addDoc(collection(db, "threads"), {
            id: Date.now(),
            data: {
                name: threadName
            }
        });

    } catch (err) {
        console.log(err);
    }
}