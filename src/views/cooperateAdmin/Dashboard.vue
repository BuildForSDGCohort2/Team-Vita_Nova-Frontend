<template>
  <div>
    <StatusBarCard />
    <div v-for="activity in activities" :key="activity.title" class="activity-cards">
      <DropDownCard :title="activity.title" />
    </div>
    <v-row justify="center" class="center-button">
      <p>Skip this step</p>
    </v-row>
  </div>
</template>

<script>
import DropDownCard from "../../components/cooperateAdmin/dashboardPage/DropDownCard";
import StatusBarCard from "../../components/cooperateAdmin/dashboardPage/StatusBarCard";
import { userloggedOut } from "../../services/user-authentication";
export default {
  components: {
    DropDownCard,
    StatusBarCard
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