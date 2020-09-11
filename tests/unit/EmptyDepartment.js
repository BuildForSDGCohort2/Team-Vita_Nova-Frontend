import EmptyDepartment from "../../src/components/corporateAdmin/employee/departments/EmptyDepartment";
import { shallowMount } from '@vue/test-utils';
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify)
describe('EmptyDepartment', ()=> {
    test('check if test module is setup correctly', () => {
        expect(true).toBe(true)
    })

    test('Test if edit button is accessible', () => {
        const wrapper = shallowMount(EmptyDepartment)
        expect(wrapper.find('.v-btn').exists()).toBeTruthy
    })

    it("Checks the data-title", () => {
        const wrapper = shallowMount(EmptyDepartment)
        wrapper.vm.title = "EmptyDepartment"
        expect(wrapper.vm.title).toMatch("EmptyDepartment");
    });
})