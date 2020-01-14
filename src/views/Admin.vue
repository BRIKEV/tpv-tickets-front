<template>
  <div class="admin">
    <div class="input-container">
      <input type="text" placeholder="Precio">
      <input type="text" placeholder="Fecha">
    </div>
    <bk-button><slot>Comprobar</slot></bk-button>
    <bk-table></bk-table>
  </div>
</template>

<script>
import BkTable from '@/components/BkTable.vue';
import BkButton from '@/components/BkButton.vue';

export default {
  name: 'Admin',

  components: {
    BkTable,
    BkButton
  },
}
</script>
<style scoped>
  .admin {
    display: flex;
    flex-direction: column;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
  .input-container > input {
    margin: 10px 0;
    height: 25px;
  }
</style>
