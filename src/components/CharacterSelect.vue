<template>
    <div class="character-list card mt-4">
        <h3>Character</h3>
        <div class="character-select-ui">
            <button @click="changeChar('prev')" :disabled="ready">&lt;</button>
            <img class="character-select" :src="charUrl()">
            <button @click="changeChar('next')" :disabled="ready">&gt;</button>
        </div>
        <button class="ready" @click="onReady">{{ready ? 'Not ready' : 'Ready'}}</button>
    </div>
</template>

<script>
import { getPlayers, setReady } from '@/firebase'
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            players: [],
            char: 0,
            ready: false
        }
    },
    mounted () {
        this.fetchData();
    },
    computed: {
        ...mapGetters(['player'])
    },
    methods: {
        ...mapActions(['loadPlayer']),
        async fetchData() {
            const player = this.loadPlayer();
            if(!player) this.$router.push('/');
            this.players = await getPlayers(this.$route.params.room)
        },
        charUrl(){
            return require(`@/assets/chars/char-${this.char}.jpg`)
        },
        changeChar(direction){
            if(direction === 'next') this.char++
            if(direction === 'prev') this.char--
            if(this.char < 0) this.char = 12
            if(this.char > 12) this.char = 0
        },
        async onReady() {
            this.ready = !this.ready;
            const status = this.ready ? 'Ready' : 'Joined'
            await setReady({char: this.char, status, id: this.player})

        }

    }
}
</script>

<style lang="scss" scoped>
.character-list {
    grid-column-start: 2;
}
.character-select-ui {
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
}
.character-select {
    border: 4px solid rgb(255, 187, 0);
    width: 200px;
    height: 310px;
    justify-self: center;
}
.ready {
    margin-top: 2em;
}
</style>