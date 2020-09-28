<template>
  <v-app id="keep" class="app">
    <div v-if="!loggedIn">
      <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    </div>
    <div v-else>
      <MainLayout />
    </div>
    <v-main>
      <v-container fluid class="app-container">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainLayout from "./components/mainViews/layout/MainHeader";
import OnboardingLayout from "./components/onboarding/layout/Header";

export default {
  props: {
    source: String
  },
  components: {
    OnboardingLayout,
    MainLayout
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
  font-family: IBM Plex Sans,sans-serif !important;
}
.app-container {
  padding: 0 0 !important;
  background-color: #E4F0D4 !important;
}
</style>