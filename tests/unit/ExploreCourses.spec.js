import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import ExploreCourses from "@/components/cooperateAdmin/courses/ExploreCourses/ExploreCourses";

Vue.use(Vuetify)
Vue.config.productionTip = false;
const localVue = createLocalVue();

describe("View All Courses Component unit test", () => {
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();
    })
    test("setup correctly", () => {
        expect(true).toBe(true);
    });
    test("render my courses and match snapshot", () => {
        const wrapper = mount(ExploreCourses, {
            localVue,
            vuetify,
            propsData: {
                title: "ExploreCourses"
            }
        });
        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.text()).toContain("My Courses");
    });
    test("render course cards", () => {
        const course = "Introduction to Robotics";
        const wrapper = mount(ExploreCourses, {
            localVue,
            vuetify,
            propsData: {
                title: "ExploreCourses",
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

    test("calls viewAll when ViewAll link is clicked",  () => {
        const course = "Introduction to Robotics";
        const wrapper = mount(ExploreCourses, {
            localVue,
            vuetify,
            propsData: {
                title: "ExploreCourses",
                cards: {
                    myCourses: [
                        {
                            course: course
                        }
                    ]
                }
            }
        });
        wrapper.vm.viewAll = jest.fn();

        wrapper.find('a.all').trigger('click');

        expect(wrapper.vm.viewAll).toHaveBeenCalled();
    });

});