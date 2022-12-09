<template>
  <div>
    <Header small />
    <div class="home">
      <h1>game</h1>
      <pre>{{players}}</pre>
    </div>
  </div>
</template>

<script>
import { getPlayers } from '@/firebase'

import Header from '@/components/Header.vue'

import RoomCreate from '@/components/RoomCreate.vue'
import RoomList from '@/components/RoomList.vue'

export default {
  name: 'HomeView',
  components: {
    RoomCreate,
    RoomList,
    Header,
  },
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
  },
}
</script>

<style lang="scss" scoped>

.home {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  row-gap: 2em;
  background-color: rgba(55,55,55,.8);
  backdrop-filter: blur(20px);
  padding: 3em;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 3em 0;
  }
}

.room-create,
.room-list {
  justify-self: center;
  grid-column: 2;
  @media only screen and (max-width: 600px) {
    grid-column: 1;
  }
}

</style>