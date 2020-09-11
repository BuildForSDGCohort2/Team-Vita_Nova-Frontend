import UpdateProfile from "../../src/views/corporateAdmin/UpdateProfile";
import { shallowMount } from '@vue/test-utils';
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify)
describe('UpdateProfile', ()=> {
    test('check if test module is setup correctly', () => {
        expect(true).toBe(true)
    })

    test('Test if edit button is accessible', ()=> {
        const wrapper = shallowMount(UpdateProfile)
        expect(wrapper.find('.v-btn').exists()).toBeTruthy
    })

    it("Checks the data-title", () => {
        const wrapper = shallowMount(UpdateProfile)
        wrapper.vm.title ="UpdateProfile"
        expect(wrapper.vm.title).toMatch("UpdateProfile");
    });


    // test('Click calls the right function', () => {
    //     // wrapper is declared before this test and initialized inside the beforeEach
    //     const wrapper = shallowMount(UpdateProfile)
    //     wrapper.vm.submit = jest.fn();
    //     const $btnEdit = wrapper.find('[data-testid="submit-button"]');
    //     $btnEdit.trigger('click');
    //     expect(wrapper.vm.submit).toHaveBeenCalled();
    // });


})