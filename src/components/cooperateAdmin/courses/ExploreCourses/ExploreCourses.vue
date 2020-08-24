<template>
  <v-responsive>
    <v-container style="max-width: 1000px" grid-list-md>
      <div :style="{'font-family': 'IBM Plex Sans'}">
        <v-row>
          <v-col class="d-flex" cols="12" sm="2" md="2" >
            <v-select
                v-model="select"
                @change="selectChange"
                class="select my-2"
                :items="dropdown_font"
                label="Sort By:"
                flat
                outlined
                dense
            ></v-select>
          </v-col>
          <v-col cols="12" md="5">
          </v-col>
          <v-col cols="12" md="5" >
            <v-text-field
                append-icon="mdi-magnify"
                label="Search by Course name"
                solo-inverted
                flat
                :style="{'alignment': 'right'}"
                v-model="searching"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <h3 :style="{'text-transform': 'uppercase'}">Assigned Courses</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" v-for="(card, index) in cards.assignedCourses" :key="index">
            <div>
              <CourseCard :cards="card"/>
            </div>
          </v-col>
        </v-row>
        <v-row class="all-courses">
          <v-col cols="12">
            <h3 class="all-courses-header" :style="{'text-transform': 'uppercase'}">Existing Courses</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" v-for="(card, index) in cards.existingCourses" :key="index">
            <div>
              <CourseCard :cards="card" :index="index"/>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-responsive>
</template>

<script>
  import CourseCard from "../CourseCard";
  export default {
    name: "ExploreCourses",
    data() {
      return {
        dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
        searching: '',
        select: ''
      }
    },
    methods: {
      selectChange() {
        console.log('inside selectChange')
      }
      // viewAll(type) {
      //   if (type === 'myCourses'){
      //     console.log(this.cards.assignedCourses);
      //   }
      //   else {
      //     console.log(this.cards.existingCourses);
      //   }
      // },
      // search(){
      //   const searchCourses = [];
      //   if(this.searching){
      //     for (const i in this.cards.assignedCourses) {
      //       if (this.cards.assignedCourses.hasOwnProperty(i) && this.cards.assignedCourses[i].course.toLowerCase().match(this.searching.toLowerCase())) {
      //         searchCourses.unshift(this.cards.assignedCourses[i].course);
      //       }
      //     }
      //   }
      //   console.log(searchCourses);
      // }
    },
    components: {
      CourseCard
    },
    computed: {
      cards() {
        return {
          assignedCourses: [
            {
              course: "Introduction to Robotics",
              subtitle: "21 Modules Included",
              company: "Hobo Tech",
              courseImageLink: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              rank: 4.8
            }
          ],
          existingCourses: [
            {
              course: "Introduction to Python Programming",
              subtitle: "21 Modules Included",
              courseImageLink: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              rank: 4.8
            },
            {
              course: "The Evolution of Design",
              subtitle: "21 Modules Included",
              courseImageLink: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
              rank: 4.8
            },
            {
              course: "Art & Design Principles",
              subtitle: "21 Modules Included",
              courseImageLink: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              rank: 4.8
            },
            {
              course: "Evolution Principle",
              subtitle: "21 Modules Included",
              company: "Hobo Tech",
              courseImageLink: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              rank: 4.8
            },
            {
              course: "The Game Theories",
              subtitle: "21 Modules Included",
              company: "Hobo Tech",
              courseImageLink: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
              rank: 4.8
            },
            {
              course: "Art & Design Principles",
              subtitle: "21 Modules Included",
              company: "Hobo Tech",
              courseImageLink: 'https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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
.view-all-course {
  /* View All */

  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-decoration-line: underline;
  text-align: right;

  color: #FF2E2E;
}
</style>