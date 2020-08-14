<template>
  <v-responsive>
    <v-container class="overlay" style="max-width: 90%" >

      <v-row>
        <div>
        <h3
          style="
               padding-top: 50px;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    "
        >
          Top Software Development Courses
        </h3>

        <SoftwareEngineer />
        </div>
      </v-row>

      <v-row>
        <h3
          style="padding-left:10px;
               padding-bottom: 20px;
               padding-top: 8%;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    "
        >
          Top Business Management Courses
        </h3>
        <BusinessManagement />
      </v-row>

      <v-row>
        <h3
          style="padding-left:10px;
               padding-bottom: 20px;
               padding-top: 8%;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    "
        >
          Top Design Thinking Courses
        </h3>
        <DesignThinking />
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
import SoftwareEngineer from "../../components/onboarding/exploreCourses/SoftwareEngineer";
import BusinessManagement from "../../components/onboarding/exploreCourses/BusinessManagement";
import DesignThinking from "../../components/onboarding/exploreCourses/DesignThinking";
export default {
  components: { DesignThinking, BusinessManagement, SoftwareEngineer },
  computed: {}
};
</script>
