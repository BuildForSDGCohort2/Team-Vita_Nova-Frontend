<template>
  <v-responsive class="component-container">
    <v-container grid-list-xl>
      <v-card flat class="tab-navigation">
        <v-tabs background-color="#E4F0D4" color="#F56C08" >
          <v-tab class="tab-item" to="/sender">Send Orders</v-tab>
          <v-tab class="tab-item" to="/sender/active-distributors">Active Distributors</v-tab>
        </v-tabs>
      </v-card>
    </v-container>
  </v-responsive>
</template>

<style scoped>
.component-container {
  background-color: #E4F0D4;
}
.tab-navigation {
  border-bottom: 1px solid lightgrey !important;
}
.container {
  max-width: 1000px;
}
.tab-item {
  text-transform: capitalize !important;
  font-size: 16px;
  font-weight: bold;
}
</style>
