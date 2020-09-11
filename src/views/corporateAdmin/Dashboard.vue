<template>
  <div>
    <StatusBarCard />

    <DropDownCard :title="activities[0].title" class="my-10">
      <CustomizeDashboard />
    </DropDownCard>
    <DropDownCard :title="activities[1].title" class="my-10">
      <InviteEmployees />
    </DropDownCard>
    <DropDownCard :title="activities[2].title" class="my-10">
      <CreateDepartment />
    </DropDownCard>
    <DropDownCard :title="activities[3].title" class="my-10">
      <CreateCourse />
    </DropDownCard>

    <v-row justify="center" class="center-button">
      <p>Skip this step</p>
    </v-row>
  </div>
</template>

<script>
import DropDownCard from "../../components/corporateAdmin/dashboardPage/DropDownCard";
import CustomizeDashboard from "../../components/corporateAdmin/dashboardPage/CustomizeDashboard";
import InviteEmployees from "../../components/corporateAdmin/dashboardPage/InviteEmployees";
import CreateDepartment from "../../components/corporateAdmin/dashboardPage/CreateDepartment";
import CreateCourse from "../../components/corporateAdmin/dashboardPage/CreateCourse";
import StatusBarCard from "../../components/corporateAdmin/dashboardPage/StatusBarCard";

export default {
  components: {
    DropDownCard,
    StatusBarCard,
    CustomizeDashboard,
    InviteEmployees,
    CreateDepartment,
    CreateCourse
  },
  data() {
    return {
      activities: [
        {
          title: "Customize your dashboard"
        },
        {
          title: "Invite Employees"
        },
        {
          title: "Create or Assign to Departments"
        },
        {
          title: "Create Custom Courses"
        }
      ],
      userState: this.$store.state.onboarding.status.loggedIn
    };
  }
};
</script>

<style scoped>
</style>