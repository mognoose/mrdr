<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label>Name</label>
                <input v-model="form.name" class="form-control" required />
            </div>

            <div class="form-group mt-3">
                <label>Code</label>
                <input v-model="form.code" class="form-control" required />
            </div>

            <button type="submit" class="btn btn-success mt-3">
                Create Room
            </button>

        </form>
    </div>
</template>

<script>
import { createRoom } from '@/firebase'
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
    }    
}
</script>