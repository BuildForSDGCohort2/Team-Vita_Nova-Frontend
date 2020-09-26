<template>
  <v-responsive class="component-container">
    <v-container grid-list-xl>
      <div>
        <StatusBarCard />
        <SelectAction class="my-6" />
        <Notification class="my-6" />
      </div>
    </v-container>
  </v-responsive>
</template>

<script>
import SelectAction from "../../components/mainViews/dashboardPage/SelectAction";
import Notification from "../../components/mainViews/dashboardPage/Notification";
import StatusBarCard from "../../components/mainViews/dashboardPage/StatusBarCard";

export default {
  components: {
    StatusBarCard,
    SelectAction,
    Notification,
  },
  data() {
    return {
      userState: this.$store.state.onboarding.status.loggedIn
    };
  }
};
</script>

<style scoped>
.component-container {
  background-color: #E4F0D4;
}
</style>