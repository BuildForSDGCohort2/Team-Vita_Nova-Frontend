<template>
  <div v-if="!department.length">
    <EmptyDepartment/>
  </div>
  <div v-else>
    <BrowseDepartments/>
  </div>


</template>

<script>
  import EmptyDepartment from "../../components/corporateAdmin/employee/departments/EmptyDepartment";
 import BrowseDepartments from "../../components/corporateAdmin/employee/departments/BrowseDepartments";
export default {
  components: {
    BrowseDepartments,
    EmptyDepartment
  },
  data(){
    return{
      department: []
    }
  }

};
</script>