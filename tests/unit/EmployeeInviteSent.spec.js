import { mount } from "@vue/test-utils";
import EmployeeInviteSent from "../../src/components/splashPages/EmployeeInviteSent";

const wrapper = mount(EmployeeInviteSent);
//testing if the test is properly setup on the run
describe("EmployeeInviteSent", () => {
  it("setup correctly", () => {
    expect(true).toBe(true);
  });

  //test to check if the title is correct
  it("test page has title", () => {
    expect(wrapper.text()).toContain("Invites Sent!");
  });

  it("sets the correct default data", () => {
    expect(typeof EmployeeInviteSent.data).toBe("function");
    const defaultData = EmployeeInviteSent.data();
    expect(defaultData.dialog).toBe(false);
  });
  it("renders a vue instance", () => {
    expect(mount(EmployeeInviteSent).isVueInstance()).toBe(true);
  });
  it("cancel button clicks", () => {
    wrapper.find("v-btn").trigger("Cancel");
  });
});
