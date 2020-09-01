
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import ExploreCourses from "@/components/cooperateAdmin/courses/ExploreCourses/ExploreCourses";

Vue.use(Vuetify)
Vue.config.productionTip = false;
const localVue = createLocalVue();

describe("Explore Courses Component unit test", () => {
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
        expect(wrapper.text()).toContain("Assigned Courses");
        expect(wrapper.text()).toContain("Existing Courses");
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

    test("sort by contain items",  () => {
        const dropdown_font = ['Arial', 'Calibri', 'Courier', 'Verdana'];
        const wrapper = mount(ExploreCourses, {
            localVue,
            vuetify
        });
        expect(wrapper.vm.select).toBe('')
        const items = wrapper.find('.select').props('items')
        expect(items.length).toBe(4)
        expect(items).toStrictEqual(dropdown_font)
    });

    test("sort by has no items selected by default",  () => {
        const wrapper = mount(ExploreCourses, {
            localVue,
            vuetify
        });
        expect(wrapper.find('.select').props('select')).toBe(undefined)
    });

    test("sort by item changed",  () => {
        const wrapper = mount(ExploreCourses, {
            localVue,
            vuetify
        });
        wrapper.findAll('.select').at(0).element.selected = true;
        wrapper.find('.select').trigger('change');
        expect(wrapper.vm.select).not.toBe(undefined)
        // wrapper.vm.viewAll = jest.fn();
        // wrapper.find('a.all').trigger('click');
        // expect(wrapper.vm.viewAll).toHaveBeenCalled();
    });

});
