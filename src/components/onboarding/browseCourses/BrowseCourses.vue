<template>
  <v-responsive>
    <v-container style="max-width: 1100px" grid-list-xl>
      <div :style="{ 'font-family': 'IBM Plex Sans', 'justify-content': 'center' }">
        <v-row class="my-4">
          <v-col cols="2">
          </v-col>
          <v-col class="mt-5" cols="8">
            <h3 class="pageTitle my-4 align-center justify-center">
              Exclusive course to equip <br /> your team for the best
            </h3>
          </v-col>
          <v-col cols="2">
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
                class="mt-n5 align-center justify-center "
                v-model="search"
                append-icon="mdi-magnify"
                label="Search by Course name"
                solo-inverted
            ></v-text-field>
          </v-col>
          <v-col cols="3">
          </v-col>
        </v-row>
        <v-row class="align-center justify-center ">
          <v-col cols="12">
            <h4 class="subtitle my-5">
              Business Management & Marketing Courses
            </h4>
          </v-col>
        </v-row>

        <v-row class="align-center justify-center ">
          <v-col cols="12">
            <SoftwareEngineering :search="search" />
          </v-col>
        </v-row>

        <v-row class="align-center justify-center ">
          <v-col cols="12">
            <h4 class="subtitle my-5">
              Top Business Management Courses
            </h4>
          </v-col>
        </v-row>

        <v-row class="align-center justify-center ">
          <v-col cols="12">
            <BusinessManagement :search="search" />
          </v-col>
        </v-row>

        <v-row class="align-center justify-center ">
          <v-col cols="12">
            <h4 class="subtitle my-5">
              Top Design Thinking Courses
            </h4>
          </v-col>
        </v-row>

        <v-row class="align-center justify-center ">
          <v-col cols="12">
            <DesignThinking :search="search" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-responsive>
</template>

<script>
import SoftwareEngineering from "@/components/onboarding/browseCourses/SoftwareEngineering";
import BusinessManagement from "@/components/onboarding/browseCourses/BusinessManagement";
import DesignThinking from "@/components/onboarding/browseCourses/DesignThinking";

export default {
  components: { DesignThinking, BusinessManagement, SoftwareEngineering },
  data: ()=> ({
    title: "BrowseCourses",
    search: '',

}),
  computed: {}
};
</script>

<style scoped>
.pageTitle {
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
  line-height: 62px;
  margin-top: 5%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: #2B1C1C;
}
.subtitle {
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 42px;

  letter-spacing: 1px;
  text-transform: capitalize;

  color: #2B1C1C;
}
</style>