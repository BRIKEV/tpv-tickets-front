<template>
  <BkModal
    v-if="opened"
    @close="close"
  >
    <h3 slot="header">custom header</h3>
    <template #body>
      <div>
          <span class="material-icons">
          warning
          </span>
          <div>
            Are you sure you want to delete ticket?
          </div>
      </div>
    </template>
    <template slot="footer">
      <BkButton @btn-clicked="handleDeleteClick">
          Discard
      </BkButton>
      <BkButton @btn-clicked="handleCancelClick">
          Cancel
      </BkButton>
    </template>
  </BkModal>
</template>

<script>
export default {
  name: 'MainModal',
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('onClose');
    },
    handleDeleteClick() {
      this.$emit('delete');
      this.close();
    },
    handleCancelClick() {
      this.$emit('onCancel');
      this.close();
    },
  },
};
</script>
