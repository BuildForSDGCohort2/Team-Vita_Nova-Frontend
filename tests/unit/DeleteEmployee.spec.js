import DeleteEmployee from "../../src/components/cooperateAdmin/employee/deleteEmployee/DeleteEmployee";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(Vuetify)
Vue.config.errorHandler = e => {
  console.info(e);
};
const localVue = createLocalVue();

describe("DeleteEmployee.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  })
  it("setup correctly", () => {
    expect(true).toBe(true);
  });
  it("test page has title", () => {
    const wrapper = mount(DeleteEmployee, {
      localVue,
      vuetify,
      propsData: {
        title: "DeleteEmployee"
      }
    });
    expect(wrapper.text()).toContain("");
  });

});
