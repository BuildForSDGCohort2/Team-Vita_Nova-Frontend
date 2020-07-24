<template>
  <v-app id="keep">
    <!-- <Header /> -->

    <div v-if="!loggedIn">
      <OnboardingLayout />
    </div>
    <div v-else>
      <CooperateLayout />
    </div>
    <v-main>
      <v-container fluid class="app-container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CooperateLayout from "./components/cooperateAdmin/layout/Header";
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
    }
  }
};
</script>

<style>
/* * {
  font-family: IBM Plex Sans !important;
} */
.app-container {
  padding: 0 0 !important;
}
</style>