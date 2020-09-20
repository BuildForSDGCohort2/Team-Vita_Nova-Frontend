<template>
  <v-responsive class="footer-container">
    <v-container style="max-width: 1100px" grid-list-xl>
      <div>
        <v-row>
          <v-col cols="12" md="12">
            <v-divider class="divider mx-4 ma-3 mt-16"></v-divider>
          </v-col>
        </v-row>
        <v-row  class="mt-12 ml-16">
          <v-col cols="12" md="4">
            <h3>Contact us</h3>
            <div class="mt-3">
              <p>info@vitanova.africa</p>
              <p>+234-708-002-0286</p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <h3>Address</h3>
            <div class="mt-4">
              <p>The Vita Nova Team</p>
              <p>235 Ikorodu Rd, Lagos.</p>
              <p>100001</p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <h3>Follow Us</h3>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 ml-n2 mt-2" light icon color="#F56C08">
              <v-icon size="24px">mdi {{ icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-4 mb-5 ml-15">
          <v-card-text class="py-2 footer-text">
            Copyright © 2020
          </v-card-text>
        </v-row>
      </div>
    </v-container>
  </v-responsive>

</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram", "mdi-youtube"]
  })
};
</script>

<style scoped>
h3,
p,
.footer-text {
  color: #F56C08 !important;
}
.footer-container {
  background-color: #212120;
}
.divider {
  border: 1px solid #ffffff;
}
</style>