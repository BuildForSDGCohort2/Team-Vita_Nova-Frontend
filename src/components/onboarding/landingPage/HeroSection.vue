<template>
  <div class="component-container">
    <v-container>
      <v-row class="hero-section">
        <v-col cols="12" md="8">
          <v-card class="pa-2 hero-section-item" flat>
            <h1>Equip Your Team With</h1>
            <h1>Digital Skills That Would</h1>
            <h1>Transform Your Business</h1>
            <div class="sub-text">
              <p>Gain access to thousands of courses from anywhere</p>
              <p>ranging from technology to Business management</p>
              <p>and also executive trainings</p>
            </div>
            <div style="margin-top: 30px">
              <GetStarted />
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" md="4" class="d-none d-md-flex d-lg-flex">
          <v-card class="pa-2 hero-section-item" flat>
            <v-img
              class="img1"
              height="200"
              width="200"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            ></v-img>
            <v-img
              class="img2"
              height="200"
              width="200"
              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            ></v-img>
            <v-img
              class="img3"
              height="200"
              width="200"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
  background-color: rgba(255, 242, 199, 0.25);
}

.hero-section-item {
  background-color: transparent !important;
}
.hero-section-item h1 {
  font-size: 28px !important;
}
.sub-text {
  margin-top: 20px;
}
.sub-text p {
  color: gray;
  margin-bottom: 4px !important;
  font-size: 14px;
}
.img2 {
  right: 100px;
  bottom: 40px;
}
.img3 {
  bottom: 100px;
}
</style>