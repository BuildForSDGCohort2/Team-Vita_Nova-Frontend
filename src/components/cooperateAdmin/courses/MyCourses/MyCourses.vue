<template>
  <v-responsive>
    <v-container style="max-width: 1000px" grid-list-md>
      <div :style="{'font-family': 'IBM Plex Sans'}" v-if="renderComponent">
        <v-row class="mt-n5 d-flex">
          <v-col cols="12" md="8">
          </v-col>
          <v-col cols="12" md="4" :style="{'font-size': '18px', 'justify-content': 'flex-end'}">
            <v-btn
                class="btn-course"
                large
                :style="{'font-size': '18px', 'height': '53px', 'text-transform': 'capitalize', 'background': '#FF2E2E', 'color': '#FFF', 'font-weight': 'bold'}"
                @click="forceRerender(false)"
            >
              <v-icon color="#fff">mdi-plus</v-icon>
              Create Course</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <h3 :style="{'text-transform': 'uppercase'}">Drafts</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" v-if="cards.drafts.length !== 0">
            <div v-for="(card, index) in cards.drafts" :key="index">
              <CourseCard :cards="card"/>
            </div>
          </v-col>
          <v-col cols="12" md="6" v-else-if="cards.publishedCourses.length !== 0">
            <div>
              <h2>You do not have any drafted course</h2>
            </div>
          </v-col>
          <v-col cols="12" md="6" v-else>
            <div>
              <h2>You have not created any course yet</h2>
            </div>
          </v-col>
        </v-row>
        <v-row class="all-courses">
          <v-col cols="12">
            <h3 class="all-courses-header" :style="{'text-transform': 'uppercase'}">Published Courses</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" v-if="cards.publishedCourses.length !== 0">
            <div v-for="(card, index) in cards.publishedCourses" :key="index">
              <CourseCard :cards="card" :index="index"/>
            </div>
          </v-col>
          <v-col cols="12" md="6" v-else>
            <div>
              <h2>You have not published any course yet</h2>
            </div>
          </v-col>
        </v-row>
      </div>
      <div :style="{'font-family': 'IBM Plex Sans'}" v-else>
        <CreateCourse :method="forceRerender" />
      </div>
    </v-container>
  </v-responsive>
</template>

<script>
// import CourseCard from "@/components/cooperateAdmin/courses/CourseCard";
import CreateCourse from "@/components/cooperateAdmin/courses/MyCourses/CreateCourse";
export default {
  name: "MyCourses",
  data() {
    return {
      renderComponent: true,
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      searching: '',
      select: '',
    }
  },
  methods: {
    forceRerender(condition) {
      // Remove my-component from the DOM
      this.renderComponent = condition;
    }
  },
  components: {
    // CourseCard,
    CreateCourse
  },
  computed: {
    cards() {
      return {
        drafts: [
          {
            title: "Introduction to Robotics",
            subtitle: "21 Modules Included",
            company: "Hobo Tech",
            courseImageLink: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            rank: 4.8
          }
        ],
        publishedCourses: [
          {
            title: "Nuxt.js for Beginners",
            subtitle: "21 Modules Included",
            courseImageLink: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            rank: 4.8
          }
        ],
      };
    },
  }
};
</script>

<style scoped>
.all-courses {
  margin-top: 4rem;
}
.all-courses-header {
  color: #2B1C1C;
}
.btn-course {
  /* Auto Layout */
  display: flex;
  flex-direction: row;

  position: static;
  width: 218px;
  height: 63px;
  left: 0;
  top: 0;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  align-self: center;
  margin: 24px 0;
}
</style>