<template>
  <v-container>
    <v-card flat class="tab-navigation">
      <v-tabs background-color="white" color="red">
        <v-tab to="/cooperate/courses/createCourse">Customize Course</v-tab>
        <v-tab to="/cooperate/courses/viewCourses">View Courses</v-tab>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<style scoped>
.tab-navigation {
  border-bottom: 1px solid lightgrey !important;
}
</style>