<template>
  <div class="dynamic-container">
    <transition
      name="fade" mode="out-in">
      <keep-alive>
        <component
          class="content"
          :is="currentTab"
        />
      </keep-alive>
    </transition>


    <div class="btn-container">
      <button
        v-for="tab in tabs"
        :key="tab"
        :data-cy="`${tab}-select`"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="selectedTab(tab)"
      >
        <i class="material-icons">
          {{ tabsText[tab] }}
        </i>
      </button>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import Sections from '@/sections';

export default {
  name: 'BkDynamicSelect',

  components: Sections,

  props: {
    tabs: VueTypes.array,
    tabsText: VueTypes.shape({
      TicketsSection: VueTypes.string,
      UploaderSection: VueTypes.string,
      Exit: VueTypes.string,
    }),
    currentTab: VueTypes.string,
  },
  methods: {
    selectedTab(value) {
      return this.$emit('click', value);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/theme/index.scss";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .dynamic-container {
    margin-bottom: calculateRem(100px);
  }
  .btn-container {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: calculateRem(60px);
    display: flex;
    font-weight: 700;
  }
  .tab-button {
    width: 100%;
    padding: 0;
    border: 0;
    color: $white;
    cursor: pointer;
    background-color: $brand;
    i {
      font-size: $fs-h2;
    }

    &:hover {
      background: lighten($brand, .9);
    }

    &.active {
      background-color: lighten($brand, 18%);
    }
  }
  .tab {
    padding: calculateRem(10px);
  }
</style>
