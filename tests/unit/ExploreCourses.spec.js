import { mount} from '@vue/test-utils'
import ViewCourses from "../cooperateAdmin/courses/viewCourses/ViewCourses";
describe('ViewCourses',()=>{
    test('setup correctly', () =>{
        expect(true).toBe(true)
    })
})

describe('ViewCourses', ()=>{
    const wrapper=mount(ViewCourses)
    it('test page has title', () =>{

        expect(wrapper.text()).toContain('Top Software Development Courses')
    })

})