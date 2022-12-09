<template>
  <div v-if="showHeader" class="header">
    <h1>MRDR</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'showHeader',
    ])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
}

h1 {
  padding: 5em;
  margin: 0;
}
</style>
