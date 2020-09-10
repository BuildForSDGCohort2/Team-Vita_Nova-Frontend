<template>
  <v-responsive>
    <v-row>
      <v-col cols="12">
        <v-row class="ml-2 mr-3">
          <v-col cols="12" md="3">
            <v-list-item
              to="/corperate/courseModule/text"
              style="color: #F8F8F8"
            >
              <v-img
                class="mr-2"
                src="~@/assets/text.svg"
                alt=""
                max-width="50"
                max-height="64"
              />
            </v-list-item>
          </v-col>

          <v-col cols="12" md="3">
            <v-list-item
              to="/corperate/courseModule/video"
              style="color: #F8F8F8"
            >
              <v-img
                class="mr-2"
                src="~@/assets/video.svg"
                alt=""
                max-width="50"
                max-height="64"
              />
            </v-list-item>
          </v-col>

          <v-col cols="12" md="3">
            <v-list-item
              to="/corperate/courseModule/audio"
              style="color: #F8F8F8"
            >
              <v-img
                class="mr-2"
                src="~@/assets/audio.svg"
                alt=""
                max-width="50"
                max-height="64"
              />
            </v-list-item>
          </v-col>
          <v-col cols="12" md="3">
            <v-list-item
              to="/corperate/courseModule/publish"
              style="color: #F8F8F8"
            >
              <v-img
                class="mr-2"
                src="~@/assets/assignment.svg"
                alt=""
                max-width="60"
                max-height="64"
              />
            </v-list-item>
          </v-col>
        </v-row>

        <v-row class="ml-2 mr-3">
          <v-col cols="12" md="3">
            <v-list-item to="/corperate/courseModule" style="color: #F8F8F8">
              <v-img
                class="mr-2"
                src="~@/assets/exam.svg"
                alt=""
                max-width="50"
                max-height="64"
              />
            </v-list-item>
          </v-col>
          <v-col cols="12" md="3">
            <v-list-item to="/corperate/courseModule" style="color: #F8F8F8">
              <v-img
                class="mr-2"
                src="~@/assets/download.svg"
                alt=""
                max-width="60"
                max-height="64"
              />
            </v-list-item>
          </v-col>
          <v-col cols="12" md="3">
            <v-list-item to="/corperate/courseModule" style="color: #F8F8F8">
              <v-img
                class="mr-2"
                src="~@/assets/quiz.svg"
                alt=""
                max-width="50"
                max-height="64"
              />
            </v-list-item>
          </v-col>
          <v-col cols="12" md="3">
            <v-list-item to="/corperate/courseModule" style="color: #F8F8F8">
              <v-img
                class="mr-2"
                src="~@/assets/groupwork.svg"
                alt=""
                max-width="60"
                max-height="64"
              />
            </v-list-item>
          </v-col>
        </v-row>

        <v-row class="ml-2 mr-3">
          <v-col cols="12" md="3">
            <v-list-item to="/corperate/courseModule" style="color: #F8F8F8">
              <v-img
                class="mr-2"
                src="~@/assets/pdf.svg"
                alt=""
                max-width="50"
                max-height="64"
              />
            </v-list-item>
          </v-col>
          <v-col cols="12" md="3">
            <v-list-item to="/corperate/courseModule" style="color: #F8F8F8">
              <v-img
                class="mr-2"
                src="~@/assets/project.svg"
                alt=""
                max-width="60"
                max-height="64"
              />
            </v-list-item>
          </v-col>
          <v-col cols="12" md="3">
            <v-list-item to="/corperate/courseModule" style="color: #F8F8F8">
              <v-img
                class="mr-2"
                src="~@/assets/survey.svg"
                alt=""
                max-width="50"
                max-height="64"
              />
            </v-list-item>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script>
export default {
  name: "MenuIcons"
};
</script>

<style scoped></style>
