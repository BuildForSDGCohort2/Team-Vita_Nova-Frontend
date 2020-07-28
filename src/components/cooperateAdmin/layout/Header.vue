<template>
  <div>
    <v-navigation-drawer v-model="drawer" app color="#FAFAFA">
      <v-list nav dense>
        <v-list-item link to="/cooperate/dashboard" class="menu">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cooperate/insight" class="menu">
          <v-list-item-icon>
            <v-icon>mdi-google-circles</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Insight</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cooperate/department/create" class="menu">
          <v-list-item-icon>
            <v-icon>mdi-grid-large</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Department</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cooperate/message" class="menu">
          <v-list-item-icon>
            <v-icon>mdi-message-text-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Message</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cooperate/employee/invite" class="menu">
          <v-list-item-icon>
            <v-icon>mdi-clipboard-plus-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Employees</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cooperate/helpCenter" class="menu">
          <v-list-item-icon>
            <v-icon>mdi-crosshairs-question</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Help Center</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cooperate/setting" class="menu">
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cooperate/courses" class="menu">
          <v-list-item-icon>
            <v-icon>mdi-format-float-left</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Courses</v-list-item-title>
        </v-list-item>
        <v-list-item class="menu" @click="handleLogout">
          <v-list-item-icon>
            <v-icon>mdi-alert-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" light elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="../../../assets/semfulllogo.svg" class="logo" height="30" />
      <v-spacer></v-spacer>

      <v-avatar>
        <img src="../../../assets/cynthia.png" alt="John" />
      </v-avatar>
      <v-btn class="ma-2 nav-login d-none d-md-flex" outlined color="red">Cynthia Lorie</v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    handleLogout() {
      this.$store.dispatch("onboarding/userLogout");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.menu {
  margin-top: 40px;
}
</style>