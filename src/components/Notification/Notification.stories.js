import { storiesOf } from '@storybook/vue';

import Notification from './Notification.vue';

storiesOf('Components/Notification', module)
  .add('Notifications', () => ({
    components: { Notification },
    methods: {
      show() {
        console.log('ENTRA');
        this.$notify({
          group: 'notify',
          title: 'Success',
          text: 'Success',
          duration: 3000,
          type: 'success',
        });
      },
    },
    template: `
      <div>
        <Notification group="notify" position="top" width="100%" />
        <BkButton @click="show">Success</BkButton>
      </div>
    `,
  }));
