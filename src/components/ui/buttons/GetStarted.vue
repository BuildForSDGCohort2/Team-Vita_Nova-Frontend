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