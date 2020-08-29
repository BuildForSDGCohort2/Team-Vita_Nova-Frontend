import {mount, createLocalVue, shallowMount} from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import CreateCourse from "@/components/cooperateAdmin/courses/MyCourses/CreateCourse";

Vue.use(Vuetify)
Vue.config.productionTip = false;
const localVue = createLocalVue();

describe("Create Course Component unit test", () => {
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();
    })

    test("setup correctly", () => {
        expect(true).toBe(true);
    });

    test("render create courses and match snapshot", () => {
        const wrapper = shallowMount(CreateCourse, {
            localVue,
            vuetify,
            propsData: {
                title: "CreateCourse"
            }
        });
        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.text()).toContain("Create Course");
    });

    test("Check if Create course button exist", () => {
        const wrapper = shallowMount(CreateCourse, {
            localVue,
            vuetify
        });

        expect(wrapper.find('.btn').exists()).toBeTruthy();
        expect(wrapper.find('.btn').text()).toContain("Create Course");
    });

    // test("Create course button click", () => {
    //     const wrapper = shallowMount(CreateCourse, {
    //         localVue,
    //         vuetify
    //     });
    //
    //     const event = jest.fn();
    //     const button = wrapper.find(".btn");
    //     expect(button.text()).toContain("Create Course")
    //
    //     button.vm.$on("click", event);
    //     expect(event).toHaveBeenCalledTimes(0);
    //     button.trigger("click");
    //     expect(event).toHaveBeenCalledTimes(1);
    // });

});