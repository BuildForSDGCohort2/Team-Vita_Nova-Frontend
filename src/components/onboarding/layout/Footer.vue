<template>
  <div class="footer-container mt-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h3>Contact us</h3>
          <div class="mt-4">
            <p>info@semicolon.africa</p>
            <p>+234-904-304-2009</p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <h3>Lagos</h3>
          <div class="mt-4">
            <p>312, Herbert Macaulay</p>
            <p>Way, Yaba, Lagos</p>
            <p>100001</p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="ml-6">Follow Us</h3>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 mt-2" light icon color="red">
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-card-text class="py-2 footer-text">
          Copyright Semicolon 2019, Built with in Lagos
          {{ new Date().getFullYear() }}
        </v-card-text>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>

<style scoped>
h3,
p,
.footer-text {
  color: #960c0c !important;
}
.footer-container {
  background-color: #fff2c7;
}
</style>