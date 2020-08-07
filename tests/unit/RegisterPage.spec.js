import { mount} from '@vue/test-utils'
import RegisterPage from "../onboarding/RegisterPage";
describe('RegisterPage',()=>{
    test('setup correctly', () =>{
        expect(true).toBe(true)
    })
})

describe('RegisterPage', ()=>{
    const wrapper=mount(RegisterPage)
    it('test page has title', () =>{

        expect(wrapper.text()).toContain('Create your account')
    })


    it('test firstName is null initially',()=>{
        const button = wrapper.find('v-text-field')
        expect(wrapper.vm.firstName).toBe(null)

        //set firstName to nimat and test it return nimat

        wrapper.vm.firstName = "Nimat"
        expect(wrapper.vm.firstName).toBe('Nimat')
    })

})