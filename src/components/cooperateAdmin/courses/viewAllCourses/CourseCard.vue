<template>
  <v-card rounded="lg" elevation="6" width="600" height="300" :style="{'background-image':`url(${ cards.courseImageLink })`}" style="background-size: cover">
    <div class="overlay">
      <v-list-item>
        <v-list-item-content>
          <v-list-item>
            <v-card-text class="headline prop font-weight-bold">
              <h3 style="line-height: 42px; ">{{ cards.course }}</h3>
            </v-card-text>
          </v-list-item>
          <v-list-item>
            <v-card-text class="prop" ><p style="margin-top: 0;">{{ cards.subtitle }}</p></v-card-text>
          </v-list-item>
        </v-list-item-content>

        <v-list-item-icon>
          <v-menu
              bottom
              offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  v-bind="attrs"
                  v-on="on"
                  icon
                  style="margin-top: 45px; line-height: 42px; "
              ><v-icon color="#fff" class="mb-0">mdi-dots-vertical</v-icon></v-btn>
            </template>
            <v-list v-if="cards.company">
              <v-list-item
                  v-for="(item, i) in forMyCourses"
                  :key="i"
                  @click="onSelect"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list v-else>
              <v-list-item
                  v-for="(item, i) in forAllCourses"
                  :key="i"
                  @click="onSelect"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item-icon>
      </v-list-item>
    </div>
  </v-card>
</template>

<style scoped>
.headline {
  /* View Menu */
  font-family: IBM Plex Sans,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  margin-top: 30px;
  color: #FFFFFF;
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
  font-family: IBM Plex Sans,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px !important;
  color: #FFFFFF;
}
</style>

<script>
export default {
  props: {
    cards: Object
  },
  data: () => ({
    notifications: false,
    sound: true,
    widgets: false,
    forMyCourses: [
      {
        title: 'Edit Course',
      },
      {
        title: 'Enroll to Course',
      },
      {
        title: 'Add to Department',
      },
      {
        title: 'Remove Employees',
      },
      {
        title: 'Delete Course',
      },
    ],
    forAllCourses: [
      {
        title: 'Add Employees to Course',
      },
      {
        title: 'Add to Department',
      },
      {
        title: 'Remove Employees',
      },
    ],
  }),
  methods: {
    onSelect() {
    }
  }
};
</script>