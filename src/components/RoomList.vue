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
                <tr v-for="{ code, name } in rooms" :key="code">
                    <td>{{ code }}</td>
                    <td>{{ name }}</td>
                    <td>
                        <button @click="onJoin(code)">
                            Join
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useLoadRooms, createPlayer } from '@/firebase'
import { mapGetters, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapGetters(['form'])
    },
    setup() {
        const rooms = useLoadRooms()
        return {rooms}
    },
    methods: {
        ...mapMutations(['setForm']),
        async onJoin(code) {
            if(!this.form.name) {
                console.error("NAME REQUIRED");
                return
            }
            this.setForm({code, name: this.form.name})
            await createPlayer(this.form)
            this.$router.push(`/game/${code}`)
        }
    },
}
</script>
