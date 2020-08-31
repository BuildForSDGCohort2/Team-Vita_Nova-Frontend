import LoginPage from "../../src/components/onboarding/LoginPage";
import { mount ,createLocalVue } from '@vue/test-utils';
import Vue from "vue";
import Vuetify from 'vuetify';
import {ValidationObserver} from "vee-validate";
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()
Vue.use(Vuetify)
Vue.component("ValidationObserver", ValidationObserver);

describe('LoginPage', ()=> {
    test('check if test module is setup correctly', ()=> {
        expect(true).toBe(true)
    })


        it('emits an event with user data payload',  () => {
            const wrapper = mount(LoginPage)
            const input = wrapper.find('data-testid="email-input')

            input.setValue('Adam Jahr') // Set value for text input
            wrapper.trigger('submit') // Simulate form submission

            // Assert event has been emitted
           // await wrapper.vm.$nextTick()
            const formSubmittedCalls = wrapper.emitted('userLogin')
            expect(formSubmittedCalls).toHaveLength(1)
        })
})