import { mount } from "@vue/test-utils";
import CreateCourseModule from "@/components/cooperateAdmin/courses/createCourses/CreateCourseModule";

const wrapper = mount(CreateCourseModule);
//testing if the test is properly setup on the run
describe("CreateCourseModule", () => {
    it("setup correctly", () => {
        expect(true).toBe(true);
    });

    //test to check if the title is correct
    it("test page has title", () => {
        expect(wrapper.text()).toContain("Untitled Module");
    });

    it("sets the correct default data", () => {
        expect(typeof CreateCourseModule.data).toBe("function");
        const defaultData = CreateCourseModule.data();
        expect(defaultData.search).toBe(null);
    });

    it("renders a vue instance", () => {
        expect(mount(CreateCourseModule).isVueInstance()).toBe(true);
    });
    it("cancel button clicks", () => {
        wrapper.find("v-btn").trigger("Save");
    });
});
