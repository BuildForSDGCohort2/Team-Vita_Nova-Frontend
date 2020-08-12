<<<<<<< HEAD
<template>
  <v-btn depressed to="/register" class="nav-button">Get Started</v-btn>
</template>

<style scoped>
.nav-button {
  background-color: #ff2e2e !important;
  color: #fff !important;
  border-radius: 3px !important;
  max-height: 100% !important;
  padding: 20px 28px !important;
  margin-right: 10% !important;
}
</style>
=======
<template>
  <v-btn depressed to="/register" class="nav-button mx-auto">{{title}}</v-btn>
</template>

<style scoped>
.nav-button {
  background-color: #ff2e2e !important;
  color: #fff !important;
  border-radius: 3px !important;
  max-height: 100% !important;
}
</style>
<script>
export default {
  props: {
    title: String
  }
};
</script>
>>>>>>> c1941650879b0b865d556073373c517baea335fc
