import UpdateProfile from "../../src/views/cooperateAdmin/UpdateProfile";
import { mount ,createLocalVue } from '@vue/test-utils';
import Vue from "vue";
import Vuetify from "vuetify";


Vue.use(Vuetify)
describe('UpdateProfile', ()=> {
    let localVue;
    let vuetify;
    let wrapper;

    beforeEach(() => {
        localVue = createLocalVue();
        vuetify = new Vuetify();

        wrapper = mount(UpdateProfile, {
            localVue,
            vuetify,

        })
    })

    test('check if test module is setup correctly', () => {
        expect(true).toBe(true)
    })

    test('test if button element can be found', ()=> {
        const wrapper = mount(UpdateProfile)
        expect(wrapper.find('[data-testid="submit-button"]').exists()).toBeTruthy
    })

    test('Click calls the right function', () => {
        // wrapper is declared before this test and initialized inside the beforeEach
        const wrapper = mount(UpdateProfile)
        wrapper.vm.submit = jest.fn();
        const $btnEdit = wrapper.find('[data-testid="submit-button"]');
        $btnEdit.trigger('click');
        expect(wrapper.vm.submit).toHaveBeenCalled();
    });


})