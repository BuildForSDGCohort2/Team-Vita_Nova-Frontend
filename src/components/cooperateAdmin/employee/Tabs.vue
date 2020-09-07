<template>
  <v-container>
    <v-card flat class="tab-navigation">
      <v-tabs background-color="white" color="red">
        <v-tab class="tab-item" to="/corperate/employee/employees">All Employees</v-tab>
        <v-tab class="tab-item" to="/corperate/employee/departments">Departments</v-tab>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<style scoped>
.tab-navigation {
  border-bottom: 1px solid lightgrey !important;
}

.tab-item {
  text-transform: capitalize !important;
  font-size: 16px;
  font-weight: bold;
}
</style>