<template>
    <div class="card mt-4">
        <table>
            <thead>
                <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ id, code, name } in rooms" :key="code">
                    <td>{{ code }}</td>
                    <td>{{ name }}</td>
                    <td>
                        <router-link :to="`/edit/${code}`">
                            <button class="btn btn-primary btn-sm me-2">
                                Edit
                            </button>
                        </router-link>
                        <button class="btn btn-danger btn-sm" @click="deleteRoom(id)">
                            Delete
                        </button>
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
        return {rooms, deleteRoom }
    },
}
</script>
