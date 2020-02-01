<template>
  <div class="input-container">
    <input
      :data-cy="dataCy"
      :value="value"
      :name="name"
      :type="type"
      required
      @input="$emit('input', $event.target.value)"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'BkInput',
  props: {
    dataCy: String,
    value: String,
    name: String,
    type: String,
    label: String,
    required: Boolean,
  },
};
</script>
<style lang="scss" scoped>
  @import "@/theme/index.scss";
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    margin: 30px 0;
    input {
      color: $white;
      font-size: $fs-small;
      border: none;
      width: 100%;
      outline: none;
      background: none;
      height: 50px;
      border-bottom: 2px solid $white;
      &:active ~label,
      &:focus ~label,
      &:valid ~label {
        bottom: 50px;
      }
    }
    label {
      color: $white;
      bottom: 12px;
      position: absolute;
      font-size: $fs-large;
      font-weight: 700;
      transition: all .3s ease;
    }
  }
</style>
