<template>
  <div>
      <v-card  justify="center" flat :style="{'font-family': 'IBM Plex Sans'}">

        <v-container >
          <img src="~@/assets/Ellipse79.svg"
               class="invite-circle" alt=""/>
          <v-card-text
              :style="{'font-family': 'IBM Plex Sans'}"
              class="text-wrap invite-title">
            <h3>
              Add Course Content
            </h3>
          </v-card-text>

          <v-card-text class="invite-text text-center " :style="{'font-family': 'IBM Plex Sans'}">
            <p >
              You can add your content, including assignments, tests, exams, quizes, and prjects. you
              can also group your students into teams and do lots more, click the “Add Chapter”
               Button at the top right to get started.
            </p>
          </v-card-text>
        </v-container>
      </v-card>
  </div>
</template>

<script>
export default {
  name: "AddCourseContent",
  data() {
    return {
      dialog: false
    };
  },
  components: {}
};
</script>

<style scoped>
.invite-circle {
  width: 200px !important;
  height: 200px !important;
  min-width: 73px !important;
  margin-left: 40% !important;
  margin-top: 10% !important;
  margin-bottom: 40px !important;
}
.invite-title {
  font-style: normal;
  font-weight: 600;
  margin-left: 30% !important;
  font-size: 36px;
  line-height: 47px;
  text-align: center;
  /* identical to box height */
  display: flex;



  /* semicolon-neutral-black */

  color: #2b1c1c;
}
.invite-text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  display: flex;
  margin-left: 3% !important;
  /*align-items: center;*/
  text-align: center;
  letter-spacing: 0.05em;

  color: #2b1c1c;
}

</style>
