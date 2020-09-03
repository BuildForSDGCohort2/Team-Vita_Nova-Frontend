import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import Plans from "@/components/onboarding/plans/Plans";

Vue.use(Vuetify)
Vue.config.productionTip = false;
const localVue = createLocalVue();

describe("Plans Component unit test", () => {
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();
    })

    test("setup correctly", () => {
        expect(true).toBe(true);
    });

    test("render my courses and match snapshot", () => {
        const wrapper = mount(Plans, {
            localVue,
            vuetify,
            propsData: {
                title: "Plans"
            }
        });
        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.text()).toContain("Select A Plan");
        expect(wrapper.text()).toContain("Benefits");
    });

    test("render plan cards", () => {
        const wrapper = mount(Plans, {
            localVue,
            vuetify,
            propsData: {
                title: "Plans",
            }
        });
        expect(wrapper.html()).toContain("N800,000");
    });

    test("Plans button click", () => {
        const wrapper = mount(Plans, {
            localVue,
            vuetify
        });

        const event = jest.fn();
        const button = wrapper.find(".btn");
        expect(button.text()).toContain("Request a Demo")

        button.vm.$on("click", event);
        expect(event).toHaveBeenCalledTimes(0);
        button.trigger("click");
        expect(event).toHaveBeenCalledTimes(1);
    });

});