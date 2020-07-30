import {mount} from "@vue/test-utils";
import ResetPassword from "../../src/components/onboarding/ResetPassword";

const wrapper = mount(ResetPassword);
//testing if the test is properly setup on the run
describe("ResetPassword", () => {
    it("setup correctly", () => {
        expect(true).toBe(true);
    });

    //test to check if the title is correct
    it("test page has title", () => {
        expect(wrapper.text()).toContain("");
    });

    // Inspect the raw component options
    it("has a created hook", () => {
        expect(typeof ResetPassword.created).toBe("function");
    });

    it("sets the correct default data", () => {
        expect(typeof ResetPassword.data).toBe("function");
        const defaultData = ResetPassword.data();
        expect(defaultData.message).toBe(".");
    });
    it("renders a vue instance", () => {
        expect(mount(ResetPassword).isVueInstance()).toBe(true);
    });
    it("Checks the data-title", () => {
        expect(wrapper.vm.title).toMatch("resetPassword");
    });
});
