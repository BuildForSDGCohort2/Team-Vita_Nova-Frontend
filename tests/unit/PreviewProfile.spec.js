import PreviewProfile from "../../src/components/cooperateAdmin/companyProfile/PreviewProfile";
import { mount  } from '@vue/test-utils';
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify)
describe('PreviewProfile', ()=> {
    test('check if test module is setup correctly', () => {
        expect(true).toBe(true)
    })

    test('test if button element can be found', ()=> {
        const wrapper = mount(PreviewProfile)
        expect(wrapper.find('.edit-button').exists()).toBeTruthy
    })

    test('Click calls the right function', () => {
        // wrapper is declared before this test and initialized inside the beforeEach
        const wrapper = mount(PreviewProfile)
        wrapper.vm.submit = jest.fn();
        const $btnEdit = wrapper.find('.edit-button');
        $btnEdit.trigger('click');
        expect(wrapper.vm.submit).toHaveBeenCalled();
    });


})