<<<<<<< HEAD
<template>
  <v-container class="component-container">
    <h1 class="text-center justify-center">
      Over
      <span style="color: rgb(255, 217, 2);">200</span>
      <span></span> Available
    </h1>
    <h1 class="text-center justify-center">to Upscale your team and</h1>
    <h1 class="text-center justify-center">executives</h1>
  </v-container>
</template>

<style scoped>
.component-container {
  background-color: #100f5e;
}
h1 {
  color: #fff;
  font-size: 30px;
  font-weight: 500;
}
</style>
=======
<template>
  <v-container fluid class="component-container pb-md-0">
    <h1 class="text-center justify-center">
      Over
      <span style="color: rgb(255, 217, 2);">200</span>
      <span></span> Available
    </h1>
    <h1 class="text-center justify-center">to Upscale your team and</h1>
    <h1 class="text-center justify-center">executives</h1>
    <v-row class="mt-12">
      <GetStarted title="Explore Courses" />
    </v-row>

    <v-card color="transparent">
      <v-img
        src="../../../assets/dashboard.png"
        height="300"
        width="600"
        class="d-none d-md-flex mx-auto dashboard-image"
      >></v-img>
    </v-card>
  </v-container>
</template>

<style scoped>
.component-container {
  background-color: #100f5e;
  margin-top: 10rem;
}
h1 {
  color: #fff;
  font-size: 30px;
  font-weight: 500;
}
.dashboard-image {
  margin-top: 4rem;
}
</style>

<script>
import GetStarted from "../../ui/buttons/GetStarted";
export default {
  components: {
    GetStarted
  }
};
</script>
>>>>>>> c1941650879b0b865d556073373c517baea335fc
