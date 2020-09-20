<template>
  <v-responsive>
    <v-container class="container" grid-list-md>
      <v-row>
        <v-col cols="12" md="10">
          <v-card
              class="card mx-auto"
              max-width="1000"
              height="300"
              outlined
              rounded="lg"
              flat
              :style="{'background-image':`url(${ cards.courseImageLink })`, 'background-size': 'cover'}"
          >
            <div class="overlay">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item>
                    <v-row>
                      <v-col class="mt-8" cols="12">
                        <v-card-text>
                          <h4>
                            <a class="links" @click="routeTo()">Explore Courses</a><span class="links"> / </span>
                            <a class="links" @click="routeTo()">{{ cards.courseCategory }}</a><span class="links"> / </span>
                            <a class="links">{{ cards.title }}</a>
                          </h4>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-list-item>
                  <v-list-item>
                    <v-card-text class="headline ml-0 mt-n4">
                      <h1
                          :style="{'color': '#fff', 'font-family': 'IBM Plex Sans', 'font-size': '36px', 'line-height': '31px', 'font-weight': 'bold'}"
                      >{{ cards.title }}</h1>
                    </v-card-text>
                  </v-list-item>
                  <v-list-item>
                    <v-card-text
                        class="prop mt-n8 pr-5"
                        :style="{'font-family': 'IBM Plex Sans', 'font-size': '14px'}"
                    >
                      <span :style="{'font-weight': 'bold'}">{{ cards.owner }} </span>
                      <v-icon color="#fff" :style="{'font-size': '6px'}">mdi-checkbox-blank-circle</v-icon>
                      <span> {{ cards.subtitle }}</span>
                    </v-card-text>
                  </v-list-item>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-card
              class="card mx-auto"
              max-width="auto"
              height="auto"
              outlined
              rounded="lg"
              flat
              :style="{'border': '1px solid #F8F8F8'}"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item>
                  <v-card-text
                      class="prop mt-n2 pr-5"
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '16px'}"
                  >
                    <span :style="{'font-weight': 'bold', 'color': '#960C0C'}">Course Description</span>
                  </v-card-text>
                </v-list-item>
                <v-list-item>
                  <v-card-text
                      class="card-content mt-n5 pr-5"
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '15px'}"
                  >
                    <p>{{ cards.courseDescription }}</p>
                  </v-card-text>
                </v-list-item>
                <v-list-item>
                  <v-card-text
                      class="prop mt-n2 pr-5"
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '16px'}"
                  >
                    <span :style="{'font-weight': 'bold', 'color': '#960C0C'}">Learning Outcome(s)</span>
                  </v-card-text>
                </v-list-item>
                <v-list-item>
                  <v-card-text
                      class="card-content mt-n5 pr-5"
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '15px'}"
                  >
                    <p>{{ cards.learningOutcome }}</p>
                  </v-card-text>
                </v-list-item>
                <v-list-item>
                  <v-card-text
                      class="prop mt-n2 pr-5"
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '16px'}"
                  >
                    <span :style="{'font-weight': 'bold', 'color': '#960C0C'}">Course Requirements</span>
                  </v-card-text>
                </v-list-item>
                <v-list-item>
                  <v-card-text
                      class="card-content mt-n5 pr-5"
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '15px'}"
                  >
                    <p>{{ cards.courseRequirements }}</p>
                  </v-card-text>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-card
              class="card mx-auto mt-16"
              max-width="auto"
              height="250"
              outlined
              rounded="lg"
              flat
              :style="{'border': '1px solid #F8F8F8'}"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item>
                  <v-card-text
                      class="card-content mt-2 pr-5"
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '15px'}"
                  >
                    <p>Course Duration</p>
                  </v-card-text>
                </v-list-item>
                <v-list-item>
                  <v-card-text
                      class="card-content mt-n15 pr-5"
                      :style="{'font-weight': 'bold', 'font-family': 'IBM Plex Sans', 'font-size': '15px'}"
                  >
                    <p>{{ cards.courseDuration }}</p>
                  </v-card-text>
                </v-list-item>
                <v-list-item>
                  <v-card-text
                      class="card-content mt-n8 pr-5"
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '15px'}"
                  >
                    <p>Course Rating</p>
                  </v-card-text>
                </v-list-item>
                <v-rating small dense v-model="rating" color="yellow" class="mt-n10 ml-7"></v-rating>
                <v-list-item>
                  <v-card-text
                      class="card-content mt-n5 pr-5"
                      :style="{'font-weight': 'bold', 'font-family': 'IBM Plex Sans', 'font-size': '15px'}"
                  >
                    <p> {{ cards.rank }}</p>
                  </v-card-text>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-card
              class="card mx-auto"
              max-width="auto"
              height="auto"
              outlined
              rounded="lg"
              flat
              :style="{'border': '1px solid #F8F8F8'}"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item>
                  <v-card-text
                      class="prop mt-n2 pr-5"
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '16px'}"
                  >
                    <span :style="{'font-weight': 'bold', 'color': '#960C0C'}">Reviews</span>
                  </v-card-text>
                </v-list-item>
                <v-list-item>
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-responsive
                          class="text-center grey lighten-2 rounded-circle d-inline-flex align-center justify-center mx-3 my-0"
                          height="64"
                          width="64"
                      >
                      </v-responsive>
                    </v-col>
                    <v-col cols="12" md="10">
                      <v-card-text
                          class="card-content ml-n5 mt-n3 pr-5"
                          :style="{'font-family': 'IBM Plex Sans', 'font-size': '15px'}"
                      >
                        <span :style="{'font-weight': 'bold'}">{{ cards.reviewBy }}</span>
                      </v-card-text>
                      <v-card-text
                          class="card-content ml-n5 mt-n7 pr-5"
                          :style="{'font-family': 'IBM Plex Sans', 'font-size': '14px'}"
                      >
                        <p>{{ cards.courseReview }}</p>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
export default {
  name: "CourseDetails",
  // props: {
  //   card: Object
  // },
  components: {

  },
  data: () => ({
    rating: Math.round(4.8),
  }),
  methods: {
    routeTo() {
      this.$router.push({ path: '/corporate/courses' });
    },
  },
  computed: {
    cards() {
      return {
        title: "Introduction to Robotics",
        owner: "Semicolon Africa",
        courseCategory: 'Design',
        subtitle: "21 Modules",
        company: "Hobo Tech",
        courseImageLink: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        rank: 4.8,
        courseReview: 'This is the best Course ever i literally took this course for my junior brother so he passed his exams without me oma gan i dont understand why, gbogbo rubbish yen ko neccessary now',
        reviewBy: 'Funmi Williams',
        courseDuration: '13 Weeks ( 8 Hours/Day)',
        courseRequirements: 'Welcome\tto\tthe\tJava\tprogramming\tlanguage\tand\tJava\tHow\tto\n' +
            '                      Program,\tEarly\tObjects,\tEleventh\tEdition!\tThis\tbook\n' +
            '                      presents\tleading-edge\tcomputing\ttechnologies\tfor\tstudents,\n' +
            '                      instructors\tand\tsoftware\tdevelopers.\tIt’s\tappropriate\tfor\n' +
            '                      introductory\tacademic\tand\tprofessional\tcourse\tsequences\n' +
            '                      based\ton\tthe\tcurriculum\trecommendations\tof\tthe\tACM\tand\n' +
            '                      the\tIEEE\tprofessional\tsocieties,1\tand\tfor\tAdvanced',
        learningOutcome: 'Welcome\tto\tthe\tJava\tprogramming\tlanguage\tand\tJava\tHow\tto\n' +
            '                      Program,\tEarly\tObjects,\tEleventh\tEdition!\tThis\tbook\n' +
            '                      presents\tleading-edge\tcomputing\ttechnologies\tfor\tstudents,\n' +
            '                      instructors\tand\tsoftware\tdevelopers.\tIt’s\tappropriate\tfor\n' +
            '                      introductory\tacademic\tand\tprofessional\tcourse\tsequences\n' +
            '                      based\ton\tthe\tcurriculum\trecommendations\tof\tthe\tACM\tand\n' +
            '                      the\tIEEE\tprofessional\tsocieties,1\tand\tfor\tAdvanced',
        courseDescription: 'Welcome\tto\tthe\tJava\tprogramming\tlanguage\tand\tJava\tHow\tto\n' +
            '                      Program,\tEarly\tObjects,\tEleventh\tEdition!\tThis\tbook\n' +
            '                      presents\tleading-edge\tcomputing\ttechnologies\tfor\tstudents,\n' +
            '                      instructors\tand\tsoftware\tdevelopers.\tIt’s\tappropriate\tfor\n' +
            '                      introductory\tacademic\tand\tprofessional\tcourse\tsequences\n' +
            '                      based\ton\tthe\tcurriculum\trecommendations\tof\tthe\tACM\tand\n' +
            '                      the\tIEEE\tprofessional\tsocieties,1\tand\tfor\tAdvanced',


      };
    },
  }
};
</script>
<style scoped>
.container {
  max-width: 1000px;
}
.headline {
  line-height: 31px;
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
.prop {
  font-family: IBM Plex Sans, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
}
.card-content {
  font-family: IBM Plex Sans, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #645262;
  text-align: justify;
}
v-card {
  transition: opacity 0.4s ease-in-out;
}
v-card:not(.on-hover) {
  opacity: 0.6;
}
.links {
  /* View All */
  left: 22.22%;
  right: 55.56%;
  top: 15.26%;
  bottom: 83.92%;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  /* identical to box height */
  letter-spacing: 0.05em;

  color: #FFFFFF;
}
</style>