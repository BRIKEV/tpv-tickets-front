<template>
  <div class="dynamic-container">
    <keep-alive>
      <component class="content" v-bind:is="currentTab">
      </component>
    </keep-alive>

    <div class="btn-container">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="selectedTab(tab)"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>

<script>
import Main from '@/views/Main.vue';
import PdfLoader from '@/components/PdfLoader.vue';

export default {
  name: 'BkDynamicSelect',

  components: {
    Main,
    PdfLoader
  },

  props: {
    tabs: Array,
    currentTab: String
  },

  methods: {
    selectedTab(value) {
      if(value && value.toLowerCase() === 'exit') {
        return this.$router.push({ path: '/login' });
      }
      return this.$emit('value-changed', value);
    }
  }
}
</script>

<style scoped>
  .btn-container {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 60px;
    display: flex;
  }
  .tab-button {
    width: 100%;
    padding: 6px 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>