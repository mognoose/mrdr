<template>
  <div>
    <Header />
    <div class="home">
      <room-create/>
      <room-list/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

import RoomCreate from '@/components/RoomCreate.vue'
import RoomList from '@/components/RoomList.vue'

export default {
  name: 'HomeView',
  components: {
    RoomCreate,
    RoomList,
    Header,
  }
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