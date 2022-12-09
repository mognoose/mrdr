<template>
    <div class="room-list card mt-4">
        <table>
            <thead>
                <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Host</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ code, name, players } in rooms" :key="code">
                    <td>{{ code }}</td>
                    <td>{{ name }}</td>
                    <td>
                        <router-link :to="`/join/${code}`">
                            <button class="btn btn-primary btn-sm me-2">
                                Join
                            </button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useLoadRooms, deleteRoom } from '@/firebase'

export default {
    setup() {
        const rooms = useLoadRooms()
        console.log(rooms);
        return {rooms, deleteRoom }
    },
}
</script>
