<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        rounded="lg"
        width="600"
        height="250"
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
        :style="{'background-image':`url(${ cards.courseImageLink })`}"
        style="background-size: cover"
      >
        <div class="overlay">
          <v-list-item>
            <v-list-item-content>
              <v-list-item>
                <v-card-text class="headline ml-0 mt-5">
                  <a
                    :style="{'color': '#fff', 'text-decoration-line': 'none'}"
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    :href="cards.title"
                  >
                    <h1
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '24px', 'line-height': '31px'}"
                    >{{ cards.title }}</h1>
                  </a>
                </v-card-text>
              </v-list-item>
              <v-list-item>
                <v-card-text
                  class="prop mt-n10 pr-5"
                  :style="{'font-family': 'IBM Plex Sans', 'font-size': '14px'}"
                >{{ cards.subtitle }}</v-card-text>
              </v-list-item>
            </v-list-item-content>
            <v-list-item-icon>
              <v-menu bottom offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mt-7 mr-5"
                    v-bind="attrs"
                    v-on="on"
                    icon
                    :style="{'font-family': 'IBM Plex Sans', 'font-size': '24px', 'line-height': '31px'}"
                  >
                    <v-icon color="#fff">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list v-if="cards.company">
                  <v-list-item
                    to="item.link"
                    v-for="(item, i) in forAssignedCourses"
                    :key="i"
                    @click="onSelect(item)"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-list v-else>
                  <v-list-item
                    v-for="(item, i) in forExistingCourses"
                    :key="i"
                    @click="onSelect(item)"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-icon>
          </v-list-item>
          <v-footer
            absolute
            class="font-weight-medium"
            :style="{'color': '#FF2E2E', 'opacity': 1, 'background-color': 'rgba(0,0,0,0.0)'}"
          >
            <v-col class="text-left" cols="12">
              <v-list-item class="font-weight-medium ml-0 mt-9" absolute>
                <v-icon
                  color="#fff"
                  :style="{'font-family': 'IBM Plex Sans', 'font-size': '14px'}"
                >mdi-star</v-icon>
                <v-card-text
                  class="prop"
                  :style="{'font-family': 'IBM Plex Sans', 'font-size': '14px'}"
                >{{ cards.rank }}</v-card-text>
              </v-list-item>
            </v-col>
          </v-footer>
        </div>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import ExploreCourses from "@/components/cooperateAdmin/courses/ExploreCourses/ExploreCourses";
export default {
  name: "CourseCard",
  props: {
    cards: Object,
    index: Number
  },
  components: {
    ExploreCourses
  },
  data: () => ({
    notifications: false,
    sound: true,
    widgets: false,
    forAssignedCourses: [
      {
        title: "Edit Course",
        link: "/cooperate/courseModule/curriculum"
      },
      {
        title: 'Enroll to Course',
        link: '/cooperate/courses/exploreCourses'
      },
      {
        title: 'Add to Department',
        link: '/cooperate/courses/exploreCourses'
      },
      {
        title: 'Remove Employees',
        link: '/cooperate/courses/exploreCourses'
      },
      {
        title: 'Delete Course',
        link: '/cooperate/courses/exploreCourses'
      },
    ],
    forExistingCourses: [
      {
        title: "Add Employees to Course",
        link: "#"
      },
      {
        title: 'Add to Department',
        link: '/cooperate/courses/exploreCourses'
      },
      {
        title: "Remove Employees",
        link: "#"
      }
    ]
  }),
  methods: {
    onSelect(item) {
      console.log(item.link);
      this.$router.push({ path: item.link });
    }
  }
};
</script>

<style scoped>
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
v-card {
  transition: opacity 0.4s ease-in-out;
}
v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>