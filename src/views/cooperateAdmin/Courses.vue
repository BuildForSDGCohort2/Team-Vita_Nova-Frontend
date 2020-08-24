<template>
  <div>
    <CourseTab />

    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import CourseTab from "../../components/cooperateAdmin/courses/CourseTab";
export default {
  name: "Employee",
  components: {
    CourseTab
  }
};
</script>