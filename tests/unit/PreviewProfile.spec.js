import PreviewProfile from "../../src/components/cooperateAdmin/companyProfile/PreviewProfile";
import { shallowMount,createLocalVue  } from '@vue/test-utils';
import Vue from "vue";
import Vuetify from "vuetify";


describe('PreviewProfile', ()=> {
    test('check if test module is setup correctly', () => {
        expect(true).toBe(true)
    })

    test('test if button element can be found', ()=> {
        const wrapper = shallowMount(PreviewProfile, {
            events: {
                company_name:'lalala',

            },
        })
        wrapper.setData({ company_logo:'lalalalalal' })
        expect(wrapper.find('.v-btn').exists()).toBeTruthy
    })

    it("Checks the data-title", () => {
        const wrapper = mount(PreviewProfile)
        wrapper.vm.company_logo = " "
        expect(wrapper.vm.title).toMatch("PreviewProfile");
    });


})