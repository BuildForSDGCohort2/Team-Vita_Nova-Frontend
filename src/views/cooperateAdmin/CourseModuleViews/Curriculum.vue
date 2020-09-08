<template>
  <v-responsive>
    <AddLesson />
    <createCourseModule />
    <AddContentAudio />
    <AddLessonPage/>
    <AddContentVideo />
  </v-responsive>
</template>

<script>
import CreateCourseModule from "@/components/cooperateAdmin/courses/createModule/CreateCourseModule";
import AddLesson from "@/components/cooperateAdmin/courses/createModule/AddCourseContent";
import AddContentVideo from "@/components/cooperateAdmin/courses/createModule/AddContentVideo";
import AddContentAudio from "@/components/cooperateAdmin/courses/createModule/AddContentAudio";
import AddLessonPage from "@/components/cooperateAdmin/courses/createModule/AddLessonPage";
export default {
  components: {
    AddLessonPage,
    AddContentAudio,
    AddContentVideo,
    AddLesson,
    CreateCourseModule
  }
};
</script>

<style scoped></style>
