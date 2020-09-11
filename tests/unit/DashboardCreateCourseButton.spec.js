import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import CreateCourse from "@/components/corporateAdmin/dashboardPage/CreateCourse";

Vue.use(Vuetify)
Vue.config.productionTip = false;
const localVue = createLocalVue();

describe("My Create Course Button on Dashboard unit test", () => {
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();
    })

    test("setup correctly", () => {
        expect(true).toBe(true);
    });

    test("Finish button click", () => {
        const wrapper = mount(CreateCourse, {
            localVue,
            vuetify
        });

        const event = jest.fn();
        const button = wrapper.find(".createCourseBtn");
        expect(button.text()).toContain("Finish")

        button.vm.$on("click", event);
        expect(event).toHaveBeenCalledTimes(0);
        button.trigger("click");
        expect(event).toHaveBeenCalledTimes(1);
    });

});