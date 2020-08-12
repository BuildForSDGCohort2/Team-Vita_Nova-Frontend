<template>
  <v-card flat>
    <v-row>
      <v-col cols="12" md="6">
        <h1>All Employees</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search by Course name"
          solo-inverted
          flat
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex" cols="12" sm="2">
        <v-select :items="items" label="Sort By:" flat outlined></v-select>
      </v-col>
      <v-col cols="12" sm="4"></v-col>
      <v-col class="d-flex" cols="12" sm="2">
        <AddEmployeesModal />
      </v-col>
      <v-col class="d-flex" cols="12" sm="2">
        <v-btn class="ma-2 transparent-btn" elevation="singleSelect" color="grey" light>
          <v-icon left>mdi-layers-triple-outline</v-icon>Add to Departments
        </v-btn>
      </v-col>
      <v-col class="d-flex" cols="12" sm="2">
        <v-btn class="ma-2 transparent-btn" elevation="singleSelect" color="grey" light>
          <v-icon left>mdi-delete</v-icon>Delete Selected
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :search="search"
      show-select
      item-key="emailAddress"
      :single-select="singleSelect"
    ></v-data-table>
  </v-card>
</template>

<script>
import AddEmployeesModal from "../modals/AddEmployeesModal";
export default {
  data() {
    return {
      search: "",
      selected: [],
      singleSelect: false,
      items: ["Date", "Email", "Age"],
      desserts: [
        {
          emailAddress: "Frozen Yogurt",
          firstName: 159,
          lastName: 6.0,
          status: 24,
          department: 4.0
        },
        {
          emailAddress: "Ice cream sandwich",
          firstName: 237,
          lastName: 9.0,
          status: 37,
          department: 4.3
        },
        {
          emailAddress: "Eclair",
          firstName: 262,
          lastName: 16.0,
          status: 23,
          department: 6.0
        },
        {
          emailAddress: "Jelly bean",
          firstName: 375,
          lastName: 0.0,
          status: 94,
          department: 0.0
        },
        {
          emailAddress: "Lollipop",
          firstName: 392,
          lastName: 0.2,
          status: 98,
          department: 0
        },
        {
          emailAddress: "KitKat",
          firstName: 518,
          lastName: 26.0,
          status: 65,
          department: 7
        }
      ],
      headers: [
        {
          text: "Email Address",
          align: "start",
          sortable: false,
          value: "emailAddress"
        },
        { text: "First Name", value: "firstName" },
        { text: "Last Name", value: "lastName" },
        { text: "Status", value: "status" },
        { text: "Department", value: "department" }
      ]
    };
  },
  components: {
    AddEmployeesModal
  }
};
</script>

<style scoped>
.transparent-btn {
  background-color: transparent !important;
  padding: 0 0 !important;
}
</style>