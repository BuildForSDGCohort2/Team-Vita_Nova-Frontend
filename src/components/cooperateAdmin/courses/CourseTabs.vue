<template>
  <v-responsive>
    <v-container style="max-width: 1000px">
      <v-card flat class="tab-navigation">
        <v-tabs background-color="white" color="#645262" class="menu">
          <v-tab class="create-course" to="/cooperate/courses/createCourse">Create Course</v-tab>
          <v-tab class="view-all-course" to="/cooperate/courses/viewAllCourses">View Courses</v-tab>
          <v-tabs-slider color="#FF2E2E"></v-tabs-slider>
        </v-tabs>
      </v-card>
    </v-container>
  </v-responsive>
</template>

<style scoped>
.tab-navigation {
  border-bottom: 1px solid #DDDDDD !important;
}
.create-course {
  /* Create Course */

  /*position: absolute;*/
  left: 0%;
  right: 69%;
  top: 12.24%;
  bottom: 86.04%;
  padding: 0;

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;

}
.view-all-course {
  /* View Courses */
  /*position: absolute;*/
  left: 7.04%;
  right: 55.89%;
  top: 12.33%;
  bottom: 86.04%;
  padding: 0;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
}
.menu {
  /* View Menu */

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;

  /* lamp-txt-1 */
  color: #645262;
}


</style>