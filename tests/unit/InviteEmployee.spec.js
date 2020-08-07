import InviteEmployee from "../cooperateAdmin/employee/inviteEmployee/InviteEmployeeForm.vue"
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

    it('After the user submit button, !emailAddress return true?', () => {
        const loginBtn = wrapper.find('button')
        loginBtn.trigger('Send Invite')
        expect(wrapper.vm.emailAddress).toBeTruthy()

        //test email field is initially null
        // const button = wrapper.find('v-text-field')
        expect(wrapper.vm.emailAddress).toBe(null)

        //test email field has input
        wrapper.vm.emailAddress = "joshval.lj@gmail.com"
        expect(wrapper.vm.joshval).toBe('joshval')
    })
    //test page title
    it('test page has title', () =>{
        expect(wrapper.text()).toContain('Invite your Employees')
    })

})