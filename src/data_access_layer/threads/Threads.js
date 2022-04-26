import db from "../firebase";
import {collection, getDocs, addDoc, FieldValue} from "firebase/firestore";

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
        const result = await addDoc(collection(db, "threads"), {
            id: Date.now(),
            data: {
                name: threadName
            }
        });
        return result;
    } catch (err) {
        console.log(err);
    }
}

export async function sendMessageToThread(threadId, message, user) {
    try {
        collection("threads").doc(threadId).collection("message").add(() => {
            return {
                timestamp: FieldValue.serverTimestamp(),
                message: message,
                uid: user.uid,
                photo: user.photo,
                email: user.email,
                displayName: user.displayName
            }
        })
    } catch (err) {
        console.log(err);
    }
}

export async function getMessagesByThread(threadId, message, user) {
    try {
        collection("threads")
            .collection("message")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                return snapshot.docs;
            });
    } catch (err) {
        console.log(err);
    }
}