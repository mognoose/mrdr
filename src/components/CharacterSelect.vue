<template>
    <div class="character-list card mt-4">
        <h3>Character</h3>
        <div class="character-select-ui">
            <button @click="changeChar('prev')">&lt;</button>
            <img class="character-select" :src="charUrl()">
            <button @click="changeChar('next')">&gt;</button>
        </div>
    </div>
</template>

<script>
import { getPlayers } from '@/firebase'

export default {
    data() {
        return {
            players: [],
            char: 0,
        }
    },
    mounted () {
        this.fetchData();
    },
    methods: {
        async fetchData() {
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
</style>