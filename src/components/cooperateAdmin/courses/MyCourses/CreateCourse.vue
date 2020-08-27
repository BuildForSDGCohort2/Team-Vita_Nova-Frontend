<template>
  <div>
    <v-row >
      <v-col class="mt-n7" cols="12" md="6">
        <h4>
          <a class="links" @click="mounted" :style="{'color': '#645262'}">Courses</a> /
          <a class="links" :style="{'color': '#645262'}" @click="mounted">My Courses</a> /
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
export default {
  props: {
    method: { type: Function },
  },
  data() {
    return { condition: true, };
  },
  methods: {
    mounted() {
      // Pass a value to the parent through the function
      this.method(this.condition);
    }
  }
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