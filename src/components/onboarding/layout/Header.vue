<template>
  <div>
    <v-app-bar app color="#FFFCF1" elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-flex d-sm-flex d-md-none"></v-app-bar-nav-icon>
      <v-btn to="/" class="onboarding-button" elevation="drawer">
        <img src="../../../assets/semfulllogo.svg" height="30" />
      </v-btn>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn depressed to="/exploreCourses" class="other-nav-button">Explore Courses</v-btn>
        <v-btn depressed class="other-nav-button">Plans</v-btn>
        <v-btn depressed to="/login" class="other-nav-button">Login</v-btn>
      </v-toolbar-items>
      <GetStarted title="Get Started" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-btn depressed class="other-nav-button">Explore Courses</v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn depressed class="other-nav-button">Plans</v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn depressed to="/login" class="other-nav-button">Login</v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
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
.title {
  margin-left: 13% !important;
}
.v-btn {
  text-transform: none !important;
}

.other-nav-button {
  background-color: transparent !important;
  margin-right: 20px !important;
}
.other-nav-button:hover::before {
  opacity: 0 !important;
}
</style>