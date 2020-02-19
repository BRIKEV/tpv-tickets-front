<template>
  <div class="container" :class="{ 'not-expanded': !this.expanded }">
      <div class="header" @click="toggleCardState">
        <p class="title" name="header">{{ title }}</p>
        <i class="material-icons icon">keyboard_arrow_down</i>
      </div>
      <div class="content" v-if="expanded">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BkCollapse',
  props: {
    isOpened: {
      type: Boolean,
      value: false,
    },
    title: String,
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggleCardState() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/index.scss";
$shadow: -1px 0px 7px -4px rgba(0,0,0,0.98);
.container {
  position: relative;
  box-shadow: $shadow;
  padding: 15px;
  height: 30px;
  background: $white;
}
.header {
    display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  icon: {
    transform: rotate(180deg);
  }
}
.container.not-expanded {
  .header {
    .icon {
      transform: rotate(-90deg);
    }
  }
}
.content {
  position: absolute;
  box-shadow: $shadow;
  padding: 10px;
  min-height: auto;
  overflow: hidden;
}
</style>
