<template>
  <button
    class="btn"
    @click="btnClicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BkButton',

  methods: {
    btnClicked() {
      this.$emit('btn-clicked');
    },
  },

};
</script>

<style lang="scss" scoped>
  .btn {
    background: #118060;
    border-radius: 30px;
    font-size: 12px;
    color: #fff;
    height: 32px;
    border: none;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    transition: all .15s linear;

    &:hover {
      background: #118060;
    }

    &:active {
      background-color: #0d5f48;
    }
  }
</style>
