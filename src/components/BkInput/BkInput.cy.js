import { mount } from "@cypress/vue"
import Bkinput from "./BkInput.vue"

describe('<Bkinput />', () => {
  it('renders', () => {
    // see: https://vue-test-utils.vuejs.org/
    mount(Bkinput, { props: {} })
  })
})