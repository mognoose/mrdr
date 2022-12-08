import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {ref, onUnmounted } from 'vue';

const config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const rooms = db.collection('rooms');

export const createRoom = room => {
    return rooms.add(room)
}

export const getRoom = async code => {
    const room = await rooms.doc(code).get();
    return room.exists ? room.data() : null;
}

export const updateRoom = (code, room ) => {
    return rooms.doc(code).update(room)
}

export const deleteRoom = code => {
    return rooms.doc(code).delete()
}

export const useLoadRooms = () => {
    const roomlist = ref([])
    const close = rooms.onSnapshot(snapshot => {
        roomlist.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    })
    onUnmounted(close);
    return roomlist;
}

