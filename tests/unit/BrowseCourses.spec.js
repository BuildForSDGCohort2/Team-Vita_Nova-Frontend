import { mount} from '@vue/test-utils'
import BrowseCourses from "@/components/onboarding/browseCourses/BrowseCourses";

describe('BrowseCourses', ()=>{
    const wrapper=mount(BrowseCourses)

    it("render page titles", () => {

        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.text()).toContain("Business Management & Marketing Courses");
        expect(wrapper.text()).toContain("Top Business Management Courses");
        expect(wrapper.text()).toContain("Top Design Thinking Courses");
    });

    it("sets the correct default data", () => {
        expect(typeof BrowseCourses.data).toBe("function");
        const defaultData = BrowseCourses.data();
        expect(defaultData.title).toBe("BrowseCourses");
    });
    it("search button trigger", () => {
        wrapper.find("v-text-field").trigger("search");
    });

    it("component did mount", () => {
        expect(typeof BrowseCourses.components).toBe("object");

    });


    it("renders a vue instance", () => {
        expect(mount(BrowseCourses).isVueInstance()).toBe(true);
    });


})