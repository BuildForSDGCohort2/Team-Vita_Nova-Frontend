import PreviewProfile from "../../src/components/corporateAdmin/companyProfile/PreviewProfile";
import { shallowMount } from '@vue/test-utils';
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify)
describe('PreviewProfile', ()=> {
    test('check if test module is setup correctly', () => {
        expect(true).toBe(true)
    })

    test('Test if edit button is accessible', ()=> {
        const wrapper = shallowMount(PreviewProfile)
        expect(wrapper.find('.v-btn').exists()).toBeTruthy
    })

    it("Checks the data-title", () => {
        const wrapper = shallowMount(PreviewProfile)
         wrapper.vm.title ="PreviewProfile"
        expect(wrapper.vm.title).toMatch("PreviewProfile");
    });


})