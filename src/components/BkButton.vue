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
    background: #1a2446;
    border-radius: 8px;
    color: #fff;
    height: 40px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    height: 40px;
    font-size: 0.9375rem;
    transition: all .15s linear;
    border: 1px solid #FFF;
    &:hover {
      background: #118060;
    }

    &:active {
      background-color: #0d5f48;
    }
  }
</style>
