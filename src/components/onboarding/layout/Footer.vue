<template>
  <v-responsive class="footer-container mt-16">
    <v-container style="max-width: 1000px" grid-list-xl>
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
              <p>info@semicolon.africa</p>
              <p>+234-906-000-8609</p>
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
            <h3>Follow Us</h3>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 ml-n2 mt-2" light icon color="#FF2E2E">
              <v-icon size="24px">mdi {{ icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-4 mb-5 ml-15">
          <v-card-text class="py-2 footer-text">
            Copyright Semicolon 2019, Built with <v-icon size="24px" color="#FF2E2E">mdi-heart</v-icon> in Lagos
            {{ new Date().getFullYear() }}
          </v-card-text>
        </v-row>
      </div>
    </v-container>
  </v-responsive>

</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram", "mdi-youtube"]
  })
};
</script>

<style scoped>
h3,
p,
.footer-text {
  color: #960C0C !important;
}
.footer-container {
  background-color: #FFF2C7;
}
.divider {
  border: 1px solid #960C0C;
}
</style>