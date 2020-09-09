import {createLocalVue, shallowMount} from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import Vuex from 'vuex';
import CreateCourse from "@/components/cooperateAdmin/courses/myCourses/CreateCourse";
import SubmitButton from "@/components/ui/buttons/SubmitButton";

Vue.use(Vuetify)
Vue.config.productionTip = false;
const localVue = createLocalVue();
localVue.use(Vuex);

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

    test("Check if SubmitButton component still exist in DOM", () => {
        const wrapper = shallowMount(CreateCourse, {
            localVue,
            vuetify,
        });
        expect(wrapper.findComponent(SubmitButton).exists()).toBeFalsy();
    });

});