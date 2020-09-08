<template>
  <div>
    <v-app-bar app color="white" light elevate-on-scroll clipped-left>
      <v-btn @click.stop="drawer = !drawer" color="white" elevation="0">
        <v-icon>{{ drawer ? 'mdi-chevron-left' : 'mdi-chevron-right' }}</v-icon>
      </v-btn>

      <img src="../../../assets/semfulllogo.svg" class="logo" height="30" alt />
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-avatar>
        <img :src="profilePicture" alt="John" class="pa-2"/>
      </v-avatar>
      <v-btn class="ma-2 nav-login d-none d-md-flex" outlined color="red" style="text-transform: lowercase">{{user}}</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app color="#FAFAFA" clipped hide-overlay>
      <v-list nav dense>
        <v-list-item link to="/corperate/dashboard" class="dashboard-logout" color="red">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/corperate/employee" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-clipboard-plus-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Employees</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/corperate/courses" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-message-text-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Courses</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/corperate/helpCenter" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-crosshairs-question</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Help Center</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/corperate/insight" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-google-circles</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Insights</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/corperate/preview-profile" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-format-float-left</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Company Profile</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/corperate/settings" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item @click="handleLogout" class="dashboard-logout">
          <v-list-item-icon>
            <v-icon color="red">mdi-alert-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
const userData = JSON.parse(localStorage.getItem("userData"));

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
  },
  computed: {
    user() {
      return this.$store.state.onboarding.user.email || userData.email;
    },
    profilePicture() {
      return this.$store.state.onboarding.user.image || userData.image;
    }
  }
};
</script>

<style scoped>
.menu {
  margin-top: 15px;
}
.dashboard-logout {
  margin-top: 60px;
}
</style>