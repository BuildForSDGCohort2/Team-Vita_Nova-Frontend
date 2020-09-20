<template>
  <keep-alive>
    <component v-bind:is="employeeContainer"></component>
  </keep-alive>
</template>

<script>
import AllEmployees from "./AllEmployees";
import NoEmployee from "./NoEmployee";

export default {
  components: {
    AllEmployees,
    NoEmployee
  },
  created() {
    if (!this.employeeStatus) {
      this.$store.dispatch("employees/getEmployees").then(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  computed: {
    employeeContainer() {
      if (this.employeeStatus) {
        return AllEmployees;
      } else {
        return NoEmployee;
      }
    },
    employeeStatus() {
      return this.$store.state.employees.isPresent;
    }
  }
};
</script>