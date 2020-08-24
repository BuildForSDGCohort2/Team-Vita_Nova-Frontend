<template>
  <div>
    <v-row >
      <v-col class="mt-n7" cols="12" md="6">
        <h4>
          <a class="links" @click="doThis" :style="{'color': '#645262'}">Courses</a> /
          <a class="links" :style="{'color': '#645262'}" @click="doThis">My Courses</a> /
          <a @click="" :style="{'color': '#FF2E2E'}">Create Course</a>
        </h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-5" cols="12" md="6">
        <h1>Create Course</h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MyCourses from "./MyCourses";
export default {
  components: {
    MyCourses
  },
  props: {
    check: Boolean
  },
  methods : {
    doThis(){
      MyCourses.data().isCreateCourse = false;
      console.log(MyCourses.data().isCreateCourse)
      this.$forceUpdate();
    }
  },
};
</script>

<style>
.links {
  /* View All */
  font-weight: normal;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: right;
}
</style>