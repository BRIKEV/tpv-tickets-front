<template>
  <div class="admin">
    <BkHeader :title="$t('admin.title')"/>
    <bk-dynamic-select
      :currentTab="currentTab"
      :tabs="tabs"
      :tabsText="tabsText"
      @click="changesHandler">
    </bk-dynamic-select>
  </div>
</template>

<script>
import storage from '@/persistence';

const { removeItem } = storage('cookieStorage');

export default {
  name: 'Main',

  data() {
    return {
      currentTab: 'TicketsSection',
    };
  },
  beforeMount() {
    this.tabsText = {
      TicketsSection: 'home',
      UploaderSection: 'cloud_upload',
      Exit: 'exit_to_app',
    };
    this.tabs = ['TicketsSection', 'UploaderSection', 'Exit'];
  },
  methods: {
    changesHandler(selected) {
      if (selected.includes('Exit')) {
        removeItem('session_token');
        this.$router.push({ name: 'Login' });
      }
      this.currentTab = selected;
    },
  },


};
</script>
<style lang="scss" scoped>
  .admin {
    display: flex;
    flex-direction: column;
  }
</style>
