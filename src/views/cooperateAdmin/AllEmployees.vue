<template>
  <div>
    <AllEmployees />

    <InviteEmployee />
  </div>
</template>

<script>
import AllEmployees from "../../components/cooperateAdmin/employee/allEmployees/AllEmployees";
import InviteEmployeeForm from "../../components/cooperateAdmin/employee/inviteEmployee/InviteEmployeeForm";
import InviteEmployee from "../../components/cooperateAdmin/employee/inviteEmployee/InviteEmployee";
export default {
  components: {
    AllEmployees,
    InviteEmployeeForm,
    InviteEmployee
  }
};
</script>