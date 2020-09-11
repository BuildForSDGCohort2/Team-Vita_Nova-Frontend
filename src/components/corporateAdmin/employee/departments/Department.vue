<template>
  <v-container>
    <div id="nav" class="nav">
      <nav>
        <router-link :to="{ name: 'Dashboard'}" class="black--text text-decoration-none">Dashboard</router-link>/
        <router-link
          :to="{ name: 'departments'}"
          class="black--text text-decoration-none"
        >Department</router-link>/
        <router-link
          :to="{ name: ''}"
          :class="{ 'disabled': isActive, 'text-danger': disabled }"
        >{{department}}</router-link>
      </nav>
    </div>

    <DepartmentTable :department="department" />
    <v-row>
      <v-col cols="12">
        <div>
          <p>Enrolled Courses</p>
        </div>
      </v-col>
    </v-row>

    <div>
      <EnrolledCourses />
    </div>
  </v-container>
</template>

<script>
import DepartmentTable from "./DepartmentTable";
import EnrolledCourses from "./EnrolledCourses";

export default {
  name: "Department",
  components: {
    EnrolledCourses,
    DepartmentTable
  },
  data() {
    return {
      isActive: true,
      disabled: true
    };
  },
  mounted() {
    console.log(this.$route);
  },
  computed: {
    department() {
      return this.$route.params.department;
    }
  }
};
</script>

<style scoped>
.nav-text {
  color: black;
  text-decoration: none;
}
.disabled {
  text-decoration: none !important;
  color: red !important;
  -webkit-user-select: none !important;
}
</style>