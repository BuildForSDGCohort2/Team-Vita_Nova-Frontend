<template>
  <v-app id="keep">
    <!-- <Header /> -->

    <div v-if="!loggedIn">
      <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    </div>
    <div v-else>
      <CooperateLayout />
    </div>
    <v-main>
      <v-container fluid class="app-container">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CooperateLayout from "./components/corporateAdmin/layout/Header";
import OnboardingLayout from "./components/onboarding/layout/Header";

import { mapState } from "vuex";
export default {
  props: {
    source: String
  },
  components: {
    OnboardingLayout,
    CooperateLayout
  },

  data: () => ({
    drawer: false
  }),
  computed: {
    loggedIn() {
      return this.$store.state.onboarding.status.loggedIn;
    },
    currentTabComponent() {
      return this.$route.meta.layout || OnboardingLayout;
    }
  }
};
</script>

<style>
* {
  font-family: IBM Plex Sans !important;
}
.app-container {
  padding: 0 0 !important;
}
.v-btn {
  text-transform: none !important;
}
</style>