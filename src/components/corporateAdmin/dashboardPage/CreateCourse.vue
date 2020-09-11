<template>
  <v-row class="px-8">
    <v-col cols="12" md="6" class="p-tag">
      <p>The dashboard environment is where you would carry out different activities</p>
      <p>In this step you will customize the dashboard to fit your brand.</p>
      <div class="my-12">
        <v-btn class="createCourseBtn" color="#FF2E2E" @click="routeToCreateCoursePage" dark width="300" height="50">Create Course</v-btn>
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <img src="../../../assets/Ellipse79.svg" alt class="ml-md-12 ml-10" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    routeToCreateCoursePage() {
      window.scrollTo(0,0);
      this.$router.push({ path: '/corporate/courses/createCourse' });
    }
  }
};
</script>

<style scoped>
.p-tag p {
  font-size: 15px;
  color: grey;
}
</style>