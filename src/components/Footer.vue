<template>
  <div v-if="showHeader" class="header">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  props: {
    small: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    ...mapGetters(['showHeader'])
  }
};
</script>

<style scoped lang="scss">

.header {
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.75) 50%, rgba(0,0,0,1) 100%);
  padding: 5em;

}

h1 {
  margin: 0;
}
</style>
