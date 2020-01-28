<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',

  data() {
    return {
      currentTab: String,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
