<template>
  <div>
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
          <v-menu bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn light icon v-bind="attrs" v-on="on" large color="#00A998" class="ml-6">
                <v-icon>mdi-filter-variant</v-icon>
                <h3>Filter</h3>
                <v-icon small>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-checkbox v-model="byDepartment" label="By Department"></v-checkbox>
              </v-list-item>
              <v-list-item>
                <v-checkbox v-model="acceptedEmployee" label="Accepted Employee"></v-checkbox>
              </v-list-item>
              <v-list-item>
                <v-checkbox v-model="admin" label="Admin"></v-checkbox>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="4"></v-col>
        <v-col class="d-flex" cols="12" sm="2">
          <AddEmployeesModal>
            <v-icon left>mdi-plus</v-icon>Add New Employee
          </AddEmployeesModal>
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
        :items="getEmployees"
        :search="search"
        show-select
        item-key="email"
        :single-select="singleSelect"
      >
        <template v-slot:item.actions="{ item }">
          <v-menu bottom offset-y left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon color="black">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <div class="ma-2">
                  <v-list-item-title>Make an admin</v-list-item-title>
                </div>
              </v-list-item>
              <v-list-item>
                <AddToDepartmentModal :item="item">
                  <v-list-item-title>Add to department</v-list-item-title>
                </AddToDepartmentModal>
              </v-list-item>
              <v-list-item>
                <DeleteEmployeeModal :item="item">
                  <v-list-item-title>Delete Employee</v-list-item-title>
                </DeleteEmployeeModal>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import AddEmployeesModal from "../modals/AddEmployeesModal";
import DeleteEmployeeModal from "../modals/DeleteEmployeeModal";
import AddToDepartmentModal from "../modals/AddToDepartmentModal";
export default {
  data() {
    return {
      search: "",
      byDepartment: false,
      acceptedEmployee: false,
      admin: false,
      splashShow: true,
      selected: [],
      singleSelect: false,
      items: ["Date", "Email", "Age"],
      headers: [
        {
          text: "Email Address",
          align: "start",
          sortable: false,
          value: "email"
        },
        { text: "First Name", value: "first_name" },
        { text: "Last Name", value: "last_name" },
        { text: "Status", value: "corporate" },
        { text: "Department", value: "organisation" },
        { text: "", value: "actions" }
      ],
      actionItems: [
        {
          title: "Make an admin"
        },
        {
          title: "Add to department"
        },
        {
          title: "Remove Employee"
        }
      ]
    };
  },
  computed: {
    getEmployees() {
      return this.$store.state.employees.data;
    }
  },
  mounted() {
    console.log(this.employees);
  },
  components: {
    AddEmployeesModal,
    DeleteEmployeeModal,
    AddToDepartmentModal
  },
  methods: {
    deleteItem(item) {
      console.log(item);
    }
  }
};
</script>

<style scoped>
.transparent-btn {
  background-color: transparent !important;
  padding: 0 0 !important;
}
</style>