<template>
  <v-responsive
      class="ma-10"
  >
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      flat
    >
      <v-tabs-slider color="red"></v-tabs-slider>
      <v-tab
          v-for="menu in menus"
          :key="menu"
          class="pa-0 ma-lg-6"
      >
        <span>{{ menu }}</span>
      </v-tab>
    </v-tabs>
    <v-banner single-line class="pa-n10 ma-0"></v-banner>

    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="menu in menus"
          :key="menu"
      >
        <v-card
          color="basil"
          flat
        >
          <ViewAllCourses />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-responsive>
</template>

<script>
import ViewAllCourses from "@/components/cooperateAdmin/courses/manageCourses/ViewAllCourses";

export default {
  data () {
    return {
      tab: null,
      menus: [
        'Create Course', 'View Courses',
      ],
    }
  },
  components: {
    ViewAllCourses
  }
}
</script>

<style>
/* Helper classes */
.basil {
  background-color: #ffffff !important;
  color: #4f4f4f !important;
}
.basil--text {
  color: #4f4f4f !important;
}
</style>