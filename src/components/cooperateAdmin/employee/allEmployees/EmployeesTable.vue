<template>
  <v-card>
    <v-card-title>
      All Employees
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
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
export default {
  data() {
    return {
      search: "",
      selected: [],
      singleSelect: false,
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
  }
};
</script>