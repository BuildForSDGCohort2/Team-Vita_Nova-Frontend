<template>
  <v-container class="d-flex">
    <div class="row justify-space-between">
      <v-card rounded="lg" elevation="6" width="320" height="150" class="mt-1" :style="cssProps3">
        <v-card-title class="white--text">Introduction to Programming</v-card-title>
        <v-card-subtitle class="white--text">10 Modules Included</v-card-subtitle>
      </v-card>
      <v-card rounded="lg" elevation="6" width="320" height="150" class="mt-1" :style="cssProps2">
        <v-card-title class="white--text">Introduction to Robotics</v-card-title>
        <v-card-subtitle class="white--text">21 Modules Included</v-card-subtitle>
      </v-card>
      <v-card
        rounded="lg"
        elevation="6"
        width="320"
        height="150"
        class="mt-1"
        :style="cssProps"
        style="background-size: cover"
      >
        <v-card-title class="white--text">
          Introduction to Business
          <b>Management</b>
        </v-card-title>
        <v-card-subtitle class="white--text">5 Modules Included</v-card-subtitle>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "EnrolledCourses",
  data() {
    return {
      courseImageLink: "/./src/assets/analysis.jpg",
      cssProps: {
        backgroundImage:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      },
      cssProps2: {
        backgroundImage:
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      },
      cssProps3: {
        backgroundImage:
          "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
      }
    };
  }
};
</script>

<style scoped>
</style>