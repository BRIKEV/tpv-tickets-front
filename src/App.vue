<template>
  <div id="app">
    <BkHeader :title="brandName"/>
    <router-view/>
  </div>
</template>

<script>
import BkHeader from '@/components/BkHeader.vue';


export default {
  name: 'app',

  components: {
    BkHeader
  },

  data() {
    return {
      brandName: 'BRIKEV'
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>
