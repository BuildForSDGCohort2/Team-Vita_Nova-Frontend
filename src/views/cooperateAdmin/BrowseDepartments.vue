<template>
  <div v-if="!department.length">
    <EmptyDepartment/>
  </div>
  <div v-else>
    <BrowseDepartments/>
  </div>


</template>

<script>
  import EmptyDepartment from "../../components/cooperateAdmin/employee/departments/EmptyDepartment";
 import BrowseDepartments from "../../components/cooperateAdmin/employee/departments/BrowseDepartments";
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