<template>
  <div>
    <StatusBarCard />

    <DropDownCard :title="activities[0].title" class="my-10">
      <CustomizeDashboard />
    </DropDownCard>
    <DropDownCard :title="activities[1].title" class="my-10">
      <CustomizeDashboard />
    </DropDownCard>
    <DropDownCard :title="activities[2].title" class="my-10">
      <CustomizeDashboard />
    </DropDownCard>
    <DropDownCard :title="activities[3].title" class="my-10">
      <CustomizeDashboard />
    </DropDownCard>

    <v-row justify="center" class="center-button">
      <p>Skip this step</p>
    </v-row>
  </div>
</template>

<script>
import DropDownCard from "../../components/cooperateAdmin/dashboardPage/DropDownCard";
import CustomizeDashboard from "../../components/cooperateAdmin/dashboardPage/CustomizeDashboard";
import StatusBarCard from "../../components/cooperateAdmin/dashboardPage/StatusBarCard";
import { userloggedOut } from "../../services/user-authentication";
export default {
  components: {
    DropDownCard,
    StatusBarCard,
    CustomizeDashboard
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
          title: "Assign to Departments"
        },
        {
          title: "Create Custom Courses"
        }
      ],
      userState: this.$store.state.onboarding.status.loggedIn
    };
  },
  mounted() {
    this.userlogout;
  },
  computed: {
    userlogout() {
      if (!this.userState) this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.activity-cards {
  margin: 20px 20px;
}
</style>