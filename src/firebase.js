import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { config } from './firebase.config';

import {ref, onUnmounted } from 'vue';

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

const rooms = db.collection('rooms');

export const createRoom = room => {
    room.name = room.name.toUpperCase();
    return rooms.add(room)
}

export const getRoom = async code => {
    const room = await rooms.doc(code).get();
    return room.exists ? room.data() : null;
}

export const getRoomByCode = async code => {
    if(code.length < 4 ) return null
    return rooms.where('code', '==', code).get();
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
        console.log(snapshot.docs.map(doc => doc.data));
    })
    onUnmounted(close);
    return roomlist;
}

