import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import MyCourses from "@/components/cooperateAdmin/courses/MyCourses/MyCourses";

Vue.use(Vuetify)
Vue.config.productionTip = false;
const localVue = createLocalVue();

describe("My Courses Component unit test", () => {
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();
    })

    test("setup correctly", () => {
        expect(true).toBe(true);
    });

    test("render my courses and match snapshot", () => {
        const wrapper = mount(MyCourses, {
            localVue,
            vuetify,
            propsData: {
                title: "MyCourses"
            }
        });
        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.text()).toContain("Drafts");
        expect(wrapper.text()).toContain("Published Courses");
    });

    test("render course cards", () => {
        const course = "Introduction to Robotics";
        const wrapper = mount(MyCourses, {
            localVue,
            vuetify,
            propsData: {
                title: "MyCourses",
                cards: {
                    myCourses: [
                        {
                            course: course
                        }
                    ]
                }
            }
        });
        expect(wrapper.html()).toContain(course);
    });

    test("Create course button click", () => {
        const wrapper = mount(MyCourses, {
            localVue,
            vuetify
        });

        const event = jest.fn();
        const button = wrapper.find(".v-btn");
        expect(button.text()).toContain("Create Course")

        button.vm.$on("click", event);
        expect(event).toHaveBeenCalledTimes(0);
        button.trigger("click");
        expect(event).toHaveBeenCalledTimes(1);
    });

});