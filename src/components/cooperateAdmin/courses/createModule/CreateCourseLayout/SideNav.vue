<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      width="400"
      app
      color="#FAFAFA"
      clipped
      hide-overlay
    >
      <v-list nav >
        <v-row>
          <v-col cols="7">
            <v-list-item to="/cooperate/courseModule" class="menu">
              <v-list-item-icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Back</v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col cols="5" >
            <v-btn
              link to=""
              style="background-color:#F8F8F8; color: #FF2E2E; height: 50px !important; width: 120px !important;"
              >Add Module</v-btn
            >
          </v-col>
        </v-row>
      </v-list>

      <v-card class="text-center justify-center ma-4" height="auto">
        <v-list nav dense>
          <v-list-item @click.stop="drawer = !drawer">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title }}</v-list-item-title>
            <v-list-item-icon>
              <v-icon>{{
                drawer ? "mdi-chevron-down" : "mdi-chevron-up"
              }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-row>

        <v-col cols="12">
          <v-row class="ml-2 mr-3">
            <v-col  cols="12" md="3">
              <v-list-item to="/cooperate/courseModule/text" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/text.svg" alt="" max-width="50" max-height="64"/>
              </v-list-item>
            </v-col>

            <v-col cols="12" md="3">
              <v-list-item to="/cooperate/courseModule/video" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/video.svg" alt="" max-width="50" max-height="64"/>
              </v-list-item>
            </v-col>

            <v-col cols="12" md="3" >
              <v-list-item to="/cooperate/courseModule/audio" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/audio.svg" alt="" max-width="50" max-height="64"/>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="3">
              <v-list-item to="/cooperate/courseModule/publish" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/assignment.svg" alt="" max-width="60" max-height="64"/>
              </v-list-item>
            </v-col>
          </v-row>

          <v-row class="ml-2 mr-3">
            <v-col  cols="12" md="3">
              <v-list-item to="/cooperate/courseModule" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/exam.svg" alt="" max-width="50" max-height="64"/>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="3">
              <v-list-item to="/cooperate/courseModule" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/download.svg" alt="" max-width="60" max-height="64"/>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="3">
              <v-list-item to="/cooperate/courseModule" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/quiz.svg" alt="" max-width="50" max-height="64"/>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="3">
              <v-list-item to="/cooperate/courseModule" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/groupwork.svg" alt="" max-width="60" max-height="64"/>
              </v-list-item>
            </v-col>
          </v-row>

          <v-row class="ml-2 mr-3">
            <v-col  cols="12" md="3">
              <v-list-item to="/cooperate/courseModule" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/pdf.svg" alt="" max-width="50" max-height="64"/>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="3">
              <v-list-item to="/cooperate/courseModule" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/project.svg" alt="" max-width="60" max-height="64"/>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="3" >
              <v-list-item to="/cooperate/courseModule" style="color: #F8F8F8">
                <v-img class="mr-2" src="~@/assets/survey.svg" alt="" max-width="50" max-height="64"/>
              </v-list-item>
            </v-col>

          </v-row>
        </v-col>
        </v-row>


      </v-card>

      <div class="text-center justify-center ma-4">

        <v-btn @click="addLesson" color="red" style="margin-bottom: 50px ; margin-top: 50px; color: #F8F8F8; height: 50px !important; width: 80% "
        >+ Add Lesson</v-btn
        >

      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    item:[ {title: 'Inspiration' }]
  }),
  methods: {
    addLesson() {

      this.$router.push("/cooperate/courseModule/addLessonPage");
    }
  }
};
</script>

<style scoped></style>
