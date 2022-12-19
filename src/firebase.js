import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { config } from './firebase.config';

import {ref, onUnmounted } from 'vue';

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

const rooms = db.collection('rooms');
const players = db.collection('players');

export const createRoom = room => {
    room.name = room.name.toUpperCase();
    return rooms.add(room)
}

export const createPlayer = player => {
    player.name = player.name.toUpperCase();
    player.status = 'Joined'
    return players.add(player)
}

export const getRoom = async code => {
    const room = await rooms.doc(code).get();
    return room.exists ? room.data() : null;
}

export const checkRoomByCode = async code => {
    let found = false
    if(code.length < 4 ) return found
    const res = await rooms.where('code', '==' , code)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                found = true
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    return found;
}

export const getPlayers = async code => {
    const playerlist = ref([])
    const close = players.where('code', '==', code).onSnapshot(snapshot => {
        playerlist.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    })
    onUnmounted(close);
    return playerlist;
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

