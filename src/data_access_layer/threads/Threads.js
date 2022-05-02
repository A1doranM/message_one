import db from "../firebase";
import {
    getDocs,
    getDoc,
    doc,
    addDoc,
    FieldValue,
    query,
    where,
    collection
} from "firebase/firestore";

const threadsRef = collection(db, "cities");

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

export async function getThreadById(threadId) {
    try {
        console.log(threadId);
        const q = query(threadsRef, where("id:", "==", threadId));
        const result = await getDocs(q);
        result.forEach((doc) => {
            console.log("A: ");
            console.log(doc.id, ' => ', doc.data());
        })
        // const docRef = await doc(threadsRef, threadId);
        // const result = await getDocs(docRef);
        return [];
    } catch (err) {
        console.log(err);
    }
}

export async function sendMessageToThread(threadId, message, user) {
    // try {
    //     console.log("THREAD DATA: ", threadId, message, user);
    //     const result = await collection(db, "threads")
    //         .doc(threadId)
    //         .collection("messages")
    //         .add(() => {
    //             return {
    //                 timestamp: FieldValue.serverTimestamp(),
    //                 message: message,
    //                 uid: user.uid,
    //                 photo: user.photo,
    //                 email: user.email,
    //                 displayName: user.displayName
    //             }
    //         })
    //     console.log(result);
    // } catch (err) {
    //     console.log(err);
    // }
}

export async function getAllMessages() {
    // try {
    //     collection(db, "threads")
    //         .collection("messages")
    //         .orderBy("timestamp", "desc")
    //         .onSnapshot((snapshot) => {
    //             return snapshot.docs;
    //         });
    // } catch (err) {
    //     console.log(err);
    // }
}