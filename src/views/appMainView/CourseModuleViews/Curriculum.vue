<template>
  <v-responsive>
    <AddLesson />
<!--    <AddLessonPage/>-->

  </v-responsive>
</template>

<script>
import AddLesson from "@/components/corporateAdmin/courses/createModule/AddCourseContent";
// import AddLessonPage from "@/components/cooperateAdmin/courses/createModule/AddLessonPage";
export default {
  components: {
    // AddLessonPage,
    AddLesson,
  }
};
</script>

<style scoped></style>
