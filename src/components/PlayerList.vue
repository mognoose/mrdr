<template>
    <div class="player-list card mt-4">
        <h3>Players</h3>
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ code, name, status } in players" :key="code">
                    <td>{{ name }}</td>
                    <td>{{ status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getPlayers } from '@/firebase'

export default {
    data() {
        return {
            players: []
        }
    },
    mounted () {
        this.fetchData();
    },
    methods: {
        async fetchData() {
        this.players = await getPlayers(this.$route.params.room)
        }
    }
}
</script>
