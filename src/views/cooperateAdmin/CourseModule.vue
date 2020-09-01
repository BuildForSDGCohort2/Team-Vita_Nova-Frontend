<template>
  <div>
    <SideNav />
    <ModuleMenu />
    <v-container style="max-width: 1000px">
            <router-view />
    </v-container>
  </div>
</template>

<script>
import ModuleMenu from "@/components/cooperateAdmin/courses/createCourses/CreateCourseLayout/ModuleMenu";
import SideNav from "@/components/cooperateAdmin/courses/createCourses/CreateCourseLayout/SideNav";
export default {
  name: "ManageCourseModule",
  components: {
    SideNav,
    ModuleMenu
  }
};
</script>
