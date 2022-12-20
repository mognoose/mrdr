<template>
  <div class="container">
    <Header small />
    <div class="home">
      <div class="room">
        <h1>ROOM</h1>
        <h2>{{$route.params.room}}</h2>
      </div>
      <CharacterSelect /> 
      <PlayerList/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import PlayerList from '@/components/PlayerList.vue'
import CharacterSelect from '@/components/CharacterSelect.vue'

export default {
  name: 'HomeView',
  components: {
    PlayerList,
    CharacterSelect,
    Footer,
    Header,
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
}
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
.room {
  justify-self: center;
  grid-column: 2;
  @media only screen and (max-width: 600px) {
    grid-column: 1;
  }
}
.player-list {
  justify-self: center;
  grid-column: 2;
  @media only screen and (max-width: 600px) {
    grid-column: 1;
  }
}
</style>