import { mount } from "@vue/test-utils";
import RegisterPage from "../../src/components/onboarding/RegisterPage";

const wrapper = mount(RegisterPage);
describe("RegisterPage", () => {
  test("setup correctly", () => {
    expect(true).toBe(true);
  });

  it("test page has title", () => {
    expect(wrapper.text()).toContain("Create your account");
  });

  it("test firstName data", () => {
    // expect(wrapper.vm.firstName).toBe(null)

    //set firstName to nimat and test it return nimat
    wrapper.vm.firstName = "Nimat";
    expect(wrapper.vm.firstName).toBe("Nimat");
  });

  // Inspect the raw component options
  it("has a created hook", () => {
    expect(typeof RegisterPage.mounted).toBe("function");
  });

  it("sets the correct default data", () => {
    expect(typeof RegisterPage.data).toBe("function");
    const defaultData = RegisterPage.data();
    expect(defaultData.value).toBe(true);
  });
  it("renders a vue instance", () => {
    expect(mount(RegisterPage).isVueInstance()).toBe(true);
  });
  it("Checks if informations are submitted", () => {
    expect(wrapper.vm.submitted).toBe(false);
  });
});
