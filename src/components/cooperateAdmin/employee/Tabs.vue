<template>
  <v-container>
    <v-card flat class="tab-navigation">
      <v-tabs background-color="white" color="red">
        <v-tab to="/cooperate/employee/allEmployees">All Employees</v-tab>
        <v-tab to="/cooperate/employee/departments">Departments</v-tab>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<style scoped>
.tab-navigation {
  border-bottom: 1px solid lightgrey !important;
}
</style>