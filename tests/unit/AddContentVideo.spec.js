import {mount} from "@vue/test-utils";
import AddContentVideo from "@/components/corporateAdmin/courses/createCourses/AddContentVideo";

//testing if the test is properly setup on the run
describe("AddContentVideo", () => {
    const wrapper = mount(AddContentVideo);

    it("setup correctly", () => {
        expect(true).toBe(true);
    });

    //test to check if the title is correct
    it("test page has title", () => {
        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.text()).toContain("Untitled Video");
    });

    it("will change and update the value", () => {
        expect(wrapper.vm.accept).toBe(false);

        // const checkbox = wrapper.vm.$refs.checkbox
        // checkbox.$emit('input', true)
        //
        // expect(wrapper.vm.accept).toBe(true)
    });

    it("sets the correct default data", () => {
        expect(typeof AddContentVideo.data).toBe("function");
        const defaultData = AddContentVideo.data();
        expect(defaultData.search).toBe(null);
    });
});
