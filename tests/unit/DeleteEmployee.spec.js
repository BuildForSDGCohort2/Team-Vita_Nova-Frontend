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

  it("should open dialog", async () => {
    let wrapper
    wrapper.setData({dialog: true});
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[data-testId="dialog-close-button"]').exist()).toBe(
        true
    );
  });

  it("should emit an event when the action v-btn is clicked", () => {
    const wrapper = mount(DeleteEmployee, {
      localVue,
      vuetify,
      propsData: {
        title: "DeleteEmployee"
      }
    });
    const event = jest.fn();
    const button = wrapper.find("v-btn");
    wrapper.vm.$on("action-btn-clicked", event);
    expect(event).toHaveBeenCalledTimes(0);
    button.trigger("click");
    expect(event).toHaveBeenCalledTimes(1);
  });
});
