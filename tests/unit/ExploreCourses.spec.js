import { mount} from '@vue/test-utils'
import ExploreCourses from "@/components/cooperateAdmin/courses/viewCourses/ExploreCourses";



describe('ExploreCourses', ()=>{
    const wrapper=mount(ExploreCourses)
    it('test page has title', () =>{

        expect(wrapper.text()).toContain('Top Software Development Courses')
    })

    it("sets the correct default data", () => {
        expect(typeof ExploreCourses.data).toBe("function");
        const defaultData = ExploreCourses.data();
        expect(defaultData.software).toBe("");
    });
    it("show all button clicks", () => {
        wrapper.find("v-btn").trigger("Show All");
    });
    it("renders a vue instance", () => {
        expect(mount(ExploreCourses).isVueInstance()).toBe(true);
    });


})