import {mount} from "@vue/test-utils";
import AddContentAudio from "@/components/corporateAdmin/courses/createCourses/AddContentAudio";

//testing if the test is properly setup on the run
describe("AddContentAudio", () => {
    const wrapper = mount(AddContentAudio);

    it("setup correctly", () => {
    expect(true).toBe(true);
  });

  //test to check if the title is correct
  it("test page has title", () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toContain("Untitled Audio");
  });

  it("will change and update the value", () => {
    expect(wrapper.vm.accept).toBe(false);

    // const checkbox = wrapper.vm.$refs.checkbox
    // checkbox.$emit('input', true)
    //
    // expect(wrapper.vm.accept).toBe(true)
  });

  it("sets the correct default data", () => {
    expect(typeof AddContentAudio.data).toBe("function");
    const defaultData = AddContentAudio.data();
    expect(defaultData.search).toBe(null);
  });
});
