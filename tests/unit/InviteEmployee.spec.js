import InviteEmployee from "../../src/components/cooperateAdmin/employee/inviteEmployee/InviteEmployeeForm"
import { mount} from '@vue/test-utils'

describe('InviteEmployee',()=>{
    test('setup correctly', () =>{
        expect(true).toBe(true)
    })
})

describe('InviteEmployee', ()=>{
    const wrapper=mount(InviteEmployee)
    it('html should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    //test page title
    it('test page has title', () =>{
        expect(wrapper.text()).toContain('Invite your Employees')
    })

    // Inspect the raw component options
    it("has a created hook", () => {
        expect(typeof InviteEmployee.mounted).toBe("function");
    });

    it("sets the correct default data", () => {
        expect(typeof InviteEmployee.data).toBe("function");
        const defaultData = InviteEmployee.data();
        expect(defaultData.email).toBe("");
    });
    it("renders a vue instance", () => {
        expect(mount(InviteEmployee).isVueInstance()).toBe(true);
    });
    it("Checks the data-title", () => {
        expect(wrapper.vm.title).toMatch("inviteEmployee");
    });

})