<template>
    <div class="room-create">
        <form @submit.prevent="onSubmit">
            <div class="form-group mt-3">
                <label>ROOM CODE</label>
                <input v-model="form.code" @input="checkRoom()" class="form-control" maxlength="4" autofocus />
            </div>

            <div class="form-group">
                <label>NAME</label>
                <input v-model="form.name" class="form-control" required />
            </div>

            <button type="submit" class="btn btn-success mt-3">
                {{roomExists ? 'Join Room' : 'Host Room'}}
            </button>

        </form>
    </div>
</template>

<script>
import { createRoom, checkRoomByCode } from '@/firebase'
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            roomExists: false
        }
    },
    computed: {
        ...mapGetters(['form'])
    },
    methods: {
        ...mapActions(['createPlayer']),

        async checkRoom() {
            this.roomExists = await checkRoomByCode(this.form.code);
        },
        async onSubmit() {
            console.log(this.roomExists);
            await this.createPlayer(this.form)
            if(!this.roomExists) await createRoom(this.form)
            this.$router.push(`/game/${this.form.code}`)
        }

    },
}
</script>
