<template>
  <div class="home">
    <room-create/>
    <room-list/>
  </div>
</template>

<script>
import RoomCreate from '@/components/RoomCreate.vue'
import RoomList from '@/components/RoomList.vue'

export default {
  name: 'HomeView',
  components: {
    RoomCreate,
    RoomList,
  }
}
</script>
