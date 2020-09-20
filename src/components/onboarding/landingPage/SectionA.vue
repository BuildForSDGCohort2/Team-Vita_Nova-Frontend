<template>
  <v-responsive class="component-container">
    <v-container grid-list-xl>
      <v-row class="hero-section">
        <v-col cols="12" md="5">
          <v-card class="pa-2 hero-section-item mt-md-16" flat>
            <h1 class="mt-md-16 mr-10">First decentralized</h1>
            <h1>logistics solution</h1>
            <div style="margin-top: 30px">
              <GetStarted title="Get Started" />
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="7" class="d-none d-md-flex d-lg-flex">
          <v-card class="pa-2 hero-section-item2 overlay" flat>
            <v-img class="img1 mt-4" height="500" width="800" src="../../../assets/vitaNova/farmer-image.jpg"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-divider class="divider"></v-divider>
      </v-col>
      <v-col cols="12" md="4">
      </v-col>
      <v-col cols="12" md="4">
        <v-divider class="divider"></v-divider>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script>
import GetStarted from "../../ui/buttons/GetStarted.vue";
export default {
  components: {
    GetStarted
  }
};
</script>

<style scoped>
.component-container {
  background-color: #E4F0D4;
}

.hero-section-item {
  background-color: transparent !important;
  text-transform: uppercase !important;
  color: #F56C08;
}
.hero-section-item2 {
  background-color: transparent !important;
}
.hero-section-item h1 {
  font-size: 42px !important;
  font-weight: bold;
}
.divider {
  border: 1px solid #000;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
</style>