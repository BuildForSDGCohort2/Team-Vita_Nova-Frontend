import Departments from "../../src/components/corporateAdmin/employee/departments/BrowseDepartments";
import { shallowMount } from '@vue/test-utils';
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify)
describe('Departments', ()=> {
    test('check if test module is setup correctly', () => {
        expect(true).toBe(true)
    })

    test('Test if edit button is accessible', () => {
        const wrapper = shallowMount(Departments)
        expect(wrapper.find('.v-btn').exists()).toBeTruthy
    })

    it("Checks the data-title", () => {
        const wrapper = shallowMount(Departments)
        wrapper.vm.title = "EmptyDepartment"
        expect(wrapper.vm.title).toMatch("Departments");
    });
})