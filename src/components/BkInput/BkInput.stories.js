import { storiesOf } from '@storybook/vue';


import BkInput from './BkInput.vue';


storiesOf('Components/BkInput', module)
  .add('Username example', () => ({
    components: { BkInput },
    template: `
      <div style="background: grey; padding: 20px">
        <BkInput v-model="value" type="text" name="input" label="User" />
        <div>
          <p>Value: {{ value }}</p>
        </div>
      </div>
        `,
    data() {
      return {
        value: '',
      };
    },
  }));
