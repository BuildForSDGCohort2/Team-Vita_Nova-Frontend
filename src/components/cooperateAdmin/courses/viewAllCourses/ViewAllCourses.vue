<template>
  <v-responsive>
    <v-container style="max-width: 1000px">
      <div>
        <v-row>
          <v-col cols="12" md="6">
            <h3>My Courses</h3>
          </v-col>
          <v-col cols="12" md="6" >
            <v-text-field
                append-icon="mdi-magnify"
                label="Search by Course name"
                solo-inverted
                flat
                style="alignment: right;"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row style="margin-top: 0;">
          <v-col cols="12" md="6" v-for="(card, index) in cards" :key="index">
            <div v-if="index >= 2">
              <CourseCard :cards="card"/>
            </div>
          </v-col>
        </v-row>
        <v-row class="all-courses">
          <v-col cols="12">
            <h3 class="all-courses-header">Existing Courses</h3>
          </v-col>
          <v-col cols="12" md="6" v-for="(card, index) in cards" :key="index">
            <div v-if="index <= 3">
              <CourseCard :cards="card"/>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-responsive>
</template>

<style scoped>
.all-courses {
  margin-top: 4rem;
}
.all-courses-header {
  color: #2B1C1C;
}
</style>



<script>
import CourseCard from "./CourseCard";
export default {
  components: {
    CourseCard
  },
  computed: {
    cards() {
      return [
        {
          course: "Introduction to Python Programming",
          subtitle: "21 Modules Included"
        },
        {
          course: "Introduction to Robotics",
          subtitle: "21 Modules Included"
        },
        {
          course: "The Evolution of Design",
          subtitle: "21 Modules Included"
        },
        {
          course: "Evolution Principle",
          subtitle: "21 Modules Included"
        },
        {
          course: "The Game Theories",
          subtitle: "21 Modules Included"
        },
        {
          course: "Art & Design Principles",
          subtitle: "21 Modules Included"
        }
      ];
    }
  }
};
</script>