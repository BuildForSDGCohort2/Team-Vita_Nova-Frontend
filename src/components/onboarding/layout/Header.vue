<template>
  <v-responsive>
    <div>
      <v-app-bar app color="#E4F0D4" elevate-on-scroll>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-flex d-sm-flex d-md-none"></v-app-bar-nav-icon>
        <v-btn to="/" class="onboarding-button" elevation="drawer">
          <img src="../../../assets/vitaNova/logo_vita-nova.png" alt="" height="30" />
        </v-btn>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down pa-3">
          <v-btn depressed to="/aboutUs" class="other-nav-button">About Us</v-btn>
          <v-btn depressed to="/contactUs" class="other-nav-button">Contact Us</v-btn>
          <v-btn depressed to="/login" class="loginTab other-nav-button">Login</v-btn>
          <GetStarted title="Get Started" />
        </v-toolbar-items>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer"app color="#E4F0D4" temporary hide-overlay>
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-btn depressed to="/aboutUs" class="other-nav-button">About Us</v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn depressed to="/contactUs" class="other-nav-button">Contact Us</v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn depressed to="/login" class="other-nav-button">Login</v-btn>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-responsive>
</template>

<script>
import GetStarted from "../../ui/buttons/GetStarted.vue";
export default {
  data: () => ({
    drawer: false
  }),
  components: {
    GetStarted
  }
};
</script>

<style>
.onboarding-button {
  color: transparent !important;
  background-color: transparent !important;
}

.other-nav-button {
  background-color: transparent !important;
  margin-right: 20px !important;
  text-transform: capitalize !important;
  font-size: 16px;
  font-weight: bold;
}
.other-nav-button:hover::before {
  opacity: 0 !important;
}
</style>