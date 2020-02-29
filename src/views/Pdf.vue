<template>
  <div class="load-pdf-container">
    <h3>{{ $t('pdf.title') }}</h3>
    <BkPdfLoader
      @sendFile="sendPDF"
      :loading="loading"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Pdf',
  computed: {
    ...mapGetters(['loading']),
  },

  methods: {
    ...mapActions(['sendPDF']),
    ...mapMutations({
      setLoading: 'SET_LOADING',
    }),
  },
};
</script>
<style lang="scss" scoped>
  @import "@/theme/index.scss";
    .load-pdf-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: calculateRem(50px);
      h3 {
        font-size: $fs-h3;
        text-align: center;
        line-height: $base-line-height;
      }
    }
</style>
