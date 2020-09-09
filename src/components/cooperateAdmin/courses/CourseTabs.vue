<template>
  <v-responsive>
    <v-container style="max-width: 1000px">
      <v-card flat class="tab-navigation">
        <v-tabs background-color="white" color="#FF2E2E" >
          <v-tab class="tab-item" to="/corperate/courses/myCourses">My Course</v-tab>
          <v-tab class="tab-item" to="/corperate/courses/exploreCourses">Explore Courses</v-tab>
        </v-tabs>
      </v-card>
    </v-container>
  </v-responsive>
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
