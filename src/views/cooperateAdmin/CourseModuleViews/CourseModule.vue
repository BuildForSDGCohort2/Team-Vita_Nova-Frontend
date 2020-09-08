<template>
  <v-responsive>
    <v-row>
      <ModuleMenu />
    </v-row>
    <v-row>
      <v-col cols="12" md="2">
        <SideNav />
      </v-col>
      <v-col cols="12" md="8">
        <v-container style="max-width: 1200px">
          <router-view />
        </v-container>
      </v-col>
      <v-col cols="12" md="2">

      </v-col>
    </v-row>
  </v-responsive>
</template>

<script>
import ModuleMenu from "@/components/cooperateAdmin/courses/createModule/CreateCourseLayout/ModuleMenu";
import SideNav from "@/components/cooperateAdmin/courses/createModule/CreateCourseLayout/SideNav";
export default {
  name: "CourseModule",
  components: {
    SideNav,
    ModuleMenu
  }
};
</script>
