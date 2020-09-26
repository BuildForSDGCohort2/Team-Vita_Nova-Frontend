<template>
  <div>
    <v-app-bar app color="#E4F0D4" light elevate-on-scroll clipped-left>
      <v-btn class="drawer" @click.stop="drawer = !drawer" color="#E4F0D4" elevation="0">
        <v-icon>{{ drawer ? 'mdi-chevron-left' : 'mdi-chevron-right' }}</v-icon>
      </v-btn>

      <img src="../../../assets/vitaNova/logo_vita-nova.png" class="logo" height="30" alt />
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-avatar>
        <img :src="profilePicture" alt="John" class="pa-2"/>
      </v-avatar>
      <v-btn class="ma-2 nav-login d-none d-md-flex" outlined color="#E4F0D4" style="text-transform: lowercase">
        <span style="color: #F56C08">{{user}}</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app color="#E4F0D4" clipped hide-overlay>
      <v-list nav dense>
        <v-list-item link to="/dashboard" class="dashboard-logout" color="F56C08">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/wallet" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-wallet</v-icon>
          </v-list-item-icon>
          <v-list-item-title>My Wallet</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/profile" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-face-profile</v-icon>
          </v-list-item-icon>
          <v-list-item-title>View Profile</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/send-orders" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Send Orders</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/distributor-orders" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-truck-delivery</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Distributor Orders</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/get-verified" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-shield-check</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Get Verified</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/transaction-history" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-history</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Transaction History</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/feedback" class="menu" color="red">
          <v-list-item-icon>
            <v-icon>mdi-message</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Submit feedback</v-list-item-title>
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
      return this.$store.state.onboarding.user.first_name || userData.email;
    },
    profilePicture() {
      return this.$store.state.onboarding.user.image || userData.image;
    }
  }
};
</script>

<style scoped>
.menu {
  margin-top: 8px;
}
.dashboard-logout {
  margin-top: 50px;
}
</style>