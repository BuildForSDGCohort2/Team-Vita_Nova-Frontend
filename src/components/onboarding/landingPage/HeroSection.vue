<template>
  <div class="component-container">
    <v-container>
      <v-row class="hero-section">
        <v-col cols="12" md="8">
          <v-card class="pa-2 hero-section-item mt-md-14" flat>
            <h1>Equip Your Team With</h1>
            <h1>Digital Skills That Would</h1>
            <h1>Transform Your Business</h1>
            <div class="sub-text">
              <p>Gain access to thousands of courses from anywhere</p>
              <p>ranging from technology to Business management</p>
              <p>and also executive trainings</p>
            </div>
            <div style="margin-top: 30px">
              <GetStarted title="Get Started" />
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" md="4" class="d-none d-md-flex d-lg-flex">
          <v-card class="pa-2 hero-section-item2" flat>
            <v-img class="img1 mt-4" height="350" width="200" src="../../../assets/woman.png"></v-img>
            <v-img class="img2" height="200" width="400" src="../../../assets/man1.png"></v-img>
            <v-img class="img3" height="300" width="200" src="../../../assets/man2.png"></v-img>
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
.hero-section-item2 {
  background-color: transparent !important;
}
.hero-section-item h1 {
  font-size: 34px !important;
}
.sub-text {
  margin-top: 20px;
}
.sub-text p {
  color: gray;
  margin-bottom: 4px !important;
  font-size: 18px;
}
.img2 {
  right: 120px;
  bottom: 100px;
}
.img3 {
  bottom: 180px;
}
</style>