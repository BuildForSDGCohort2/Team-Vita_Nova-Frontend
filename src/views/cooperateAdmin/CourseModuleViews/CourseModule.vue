<template>
  <div>
    <v-row></v-row>
    <ModuleMenu />
    <SideNav />

    <v-container style="max-width: 1000px">
            <router-view />
    </v-container>
  </div>
</template>

<script>
import ModuleMenu from "@/components/cooperateAdmin/courses/createModule/CreateCourseLayout/ModuleMenu";
import SideNav from "@/components/cooperateAdmin/courses/createModule/CreateCourseLayout/SideNav";
export default {
  name: "ManageCourseModule",
  components: {
    SideNav,
    ModuleMenu
  }
};
</script>
