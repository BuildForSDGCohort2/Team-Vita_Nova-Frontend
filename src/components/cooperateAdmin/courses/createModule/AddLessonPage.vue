<template>
  <div>
    <v-card  justify="center" flat :style="{'font-family': 'IBM Plex Sans'}">

      <v-container >
        <img src="~@/assets/Ellipse79.svg"
             class="invite-circle" alt=""/>
        <v-card-text
            :style="{'font-family': 'IBM Plex Sans'}"
            class=" invite-title">
          <h3>
            Add Add Lessons
          </h3>
        </v-card-text>

        <v-card-text class=" invite-text text-wrap " :style="{'font-family': 'IBM Plex Sans'}">
          <p >
            Click on the icons under your module to add your type of lesson, <br> your can add as multiple lesson as you want to a module.
          </p>
        </v-card-text>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AddLessonPage",
  data() {
    return {
      dialog: false
    };
  },
  components: {

  }
};
</script>

<style scoped>

.invite-circle {
  width: 200px !important;
  height: 200px !important;
  min-width: 73px !important;
  margin-left: 35% !important;
  margin-top: 10% !important;
  margin-bottom: 40px !important;
}
.invite-title {
  font-style: normal;
  font-weight: 600;
  margin-left: 25% !important;
  font-size: 36px;
  line-height: 47px;
  display: flex;
  color: #2b1c1c;
}
.invite-text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  display: flex;
  margin-left: 10% !important;
  /*align-items: center;*/
  text-align: center;
  letter-spacing: 0.05em;

  color: #2b1c1c;
}
</style>
