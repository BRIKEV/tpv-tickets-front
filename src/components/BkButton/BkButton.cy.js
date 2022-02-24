import { mount } from "@cypress/vue"
import Bkbutton from "./BkButton.vue"

describe('<Bkbutton />', () => {
  it('renders', () => {
    // see: https://vue-test-utils.vuejs.org/
    mount(Bkbutton, { props: {} });
  });
});
