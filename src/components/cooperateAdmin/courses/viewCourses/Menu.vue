<template>
  <v-responsive>
    <v-app-bar
        elevate-on-scroll
        flat >

      <v-toolbar-title  style="padding-left: 6%;">Courses:</v-toolbar-title>


      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn depressed to="/businessMangement" class="other-nav-button">Business Mangement</v-btn>
        <v-btn depressed to="/softwareEngineering" class="other-nav-button">Software Engineering</v-btn>
        <v-btn depressed to="/designThinking" class="other-nav-button">Design Thinking</v-btn>
        <v-btn depressed to="/analytics" class="other-nav-button">Analytics & Data Modelling</v-btn>
      </v-toolbar-items>
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