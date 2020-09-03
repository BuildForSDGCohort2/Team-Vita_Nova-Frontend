<template>
  <div>
    <v-card flat>
      <v-row justify="center">
        <v-img src="../../assets/Ellipse79.svg" height="200" width="200" max-width="200"></v-img>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <h3>Nobody here yet</h3>
          <p>Invite your employees and add them to a department for easy assigning of courses</p>
          <AddEmployeesModal>
            <v-btn color="red" class="pa-6" dark elevation="elevation">Invite Employees</v-btn>
          </AddEmployeesModal>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AddEmployeesModal from "../../components/cooperateAdmin/employee/modals/AddEmployeesModal";
export default {
  data() {
    return {
      elevation: false
    };
  },
  components: {
    AddEmployeesModal
  }
};
</script>