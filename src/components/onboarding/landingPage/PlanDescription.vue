<template>
  <v-container class="component-container">
    <p class="text-center">Digital Learning For Digital Teams</p>
    <v-row class="hero-section">
      <v-col md="8" class="d-none d-md-flex d-lg-flex">
        <v-card class="pa-2 hero-section-item" flat>
          <v-img
            class="img1"
            height="200"
            width="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="white" class="card-container">
          <v-list-item>
            <v-list-item-avatar color="pink"></v-list-item-avatar>
            <v-list-item-content>
              <v-card-title class="headline">Large Enterprises</v-card-title>

              <v-card-subtitle
                class="subtitle"
              >A plan for business owners and Large Firms, we have curated contents that would enhance large teams to be more productive in their daily endeavours</v-card-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card color="white" class="card-container">
          <v-list-item>
            <v-list-item-avatar color="pink"></v-list-item-avatar>
            <v-list-item-content>
              <v-card-title class="headline">Small Business</v-card-title>

              <v-card-subtitle
                class="subtitle"
              >A plan for business owners and Large Firms, we have curated contents that would enhance large teams to be more productive in their daily endeavours</v-card-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card color="white" class="card-container">
          <v-list-item>
            <v-list-item-avatar color="pink"></v-list-item-avatar>
            <v-list-item-content>
              <v-card-title class="headline">Customisable Plans</v-card-title>

              <v-card-subtitle
                class="subtitle"
              >A plan for business owners and Large Firms, we have curated contents that would enhance large teams to be more productive in their daily endeavours</v-card-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="center-button">
      <GetStarted />
    </v-row>
  </v-container>
</template>

<script>
import GetStarted from "../../ui/buttons/GetStarted";
export default {
  components: {
    GetStarted
  }
};
</script>

<style scoped>
.component-container {
  margin-top: 40px !important;
}
.card-container {
  margin-bottom: 40px !important;
  cursor: pointer !important;
}

.text-center {
  color: grey;
}
.headline {
  color: #1e266d !important ;
  font-weight: bolder !important;
}
.subtitle {
  color: #455880 !important;
  margin-top: 10px;
}
.center-button {
  padding-left: 100px;
}
</style>