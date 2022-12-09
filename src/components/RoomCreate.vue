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
                Join Room
            </button>

        </form>
    </div>
</template>

<script>
import { createRoom, getRoomByCode } from '@/firebase'
import { reactive } from '@vue/reactivity'

export default {
    setup() {
        const form = reactive({ name: '', code: '' })
        
        const onSubmit = async () => {
            await createRoom({ ...form })
            form.name = ''
            form.code = ''
        }

        return { form, onSubmit }
    },
    methods: {
        async checkRoom() {
            const res = await getRoomByCode(this.form.code);
            console.log(res.docs);
        }
    },
}
</script>
