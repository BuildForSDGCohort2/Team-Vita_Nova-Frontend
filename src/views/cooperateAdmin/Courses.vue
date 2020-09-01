<template>
  <div>
    <CourseTabs />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import CourseTabs from "@/components/cooperateAdmin/courses/CourseTabs";
export default {
  name: "ManageCourses",
  components: {
    CourseTabs
  }
};
</script>