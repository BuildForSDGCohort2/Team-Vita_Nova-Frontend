<template>
  <v-container>
    <v-card flat class="tab-navigation">
      <v-tabs background-color="white" color="red">
        <v-tab to="/native/nativedashboard/home">Home</v-tab>
        <v-tab to="/native/nativedashboard/learningPath">Learning Path</v-tab>
        <v-tab to="/native/nativedashboard/completedPath">Completed Path</v-tab>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<style scoped>
.tab-navigation {
  border-bottom: 1px solid lightgrey !important;
}
</style>