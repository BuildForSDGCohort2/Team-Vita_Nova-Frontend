<template>
  <div>
    <AllEmployees />
  </div>
</template>

<script>
import AllEmployees from "../../components/cooperateAdmin/employee/allEmployees/AllEmployees";
import InviteEmployeeForm from "../../components/cooperateAdmin/employee/inviteEmployee/InviteEmployeeForm";

export default {
  components: {
    AllEmployees,
    InviteEmployeeForm
  }
};
</script>