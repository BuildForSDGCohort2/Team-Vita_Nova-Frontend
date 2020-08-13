<template>
  <v-responsive>
    <v-app-bar
        elevate-on-scroll
        flat >

      <v-toolbar-title  style="padding-left: 6%;">Courses:</v-toolbar-title>

<v-card flat >
      <v-tabs style="color: #F8F8F8; " class="hidden-sm-and-down">
        <v-tab  to="/cooperate/employee/view" class="other-nav-button">Business Mangement</v-tab>
        <v-tab  to="/cooperate/employee/view" class="other-nav-button">Software Engineering</v-tab>
        <v-tab  to="/cooperate/employee/view" class="other-nav-button">Design Thinking</v-tab>
        <v-tab  to="/cooperate/employee/view" class="other-nav-button">Analytics & Data Modelling</v-tab>
        <v-tabs-slider color="#FF2E2E"></v-tabs-slider>
      </v-tabs>
</v-card>
    </v-app-bar>

  </v-responsive>
</template>
<script>
export default {
  name: "Menu",

  components: {

  },

  data(){

  }
}

</script>
<style>

</style>