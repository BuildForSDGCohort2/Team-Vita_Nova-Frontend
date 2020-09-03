<template>
  <div v-if="!department.length">
    <EmptyDepartment/>
  </div>
  <div v-else>
    <Departments/>
  </div>


</template>

<script>
  import EmptyDepartment from "../../components/cooperateAdmin/employee/departments/EmptyDepartment";
 import Departments from "../../components/cooperateAdmin/employee/departments/Departments";
export default {
  components: {
    Departments,
    EmptyDepartment
  },
  data(){
    return{
      department: []
    }
  }

};
</script>