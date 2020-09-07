<template>
  <v-container>
    <v-card flat class="tab-navigation">
      <v-tabs background-color="white" color="red">
        <v-tab class="tab-item" to="/corperate/courses/myCourses">My Course</v-tab>
        <v-tab class="tab-item" to="/corperate/courses/exploreCourses">Explore Courses</v-tab>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<style scoped>
.tab-navigation {
  border-bottom: 1px solid lightgrey !important;
}

.tab-item {
  text-transform: capitalize !important;
  font-size: 16px;
  font-weight: bold;
}
</style>