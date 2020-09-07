<template>
  <div>
    <v-card max-width="1450" class="mx-auto" elevation="0">
      <h3
        style="padding-left:10px;
               padding-bottom: 20px;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    "
      >Top Software Development Courses</h3>
      <SoftwareEngineer />

      <h3
        style="padding-left:10px;
               padding-bottom: 20px;
               padding-top: 8%;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    "
      >Top Business Management Courses</h3>
      <BusinessManagement />

      <h3
        style="padding-left:10px;
               padding-bottom: 20px;
               padding-top: 8%;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    "
      >Top Design Thinking Courses</h3>
      <DesignThinking />
    </v-card>
  </div>
</template>

<script>
import Menu from "../../components/onboarding/browseCourses/Menu";
import SoftwareEngineer from "../../components/onboarding/browseCourses/SoftwareEngineer";
import BusinessManagement from "../../components/onboarding/browseCourses/BusinessManagement";
import DesignThinking from "../../components/onboarding/browseCourses/DesignThinking";
export default {
  components: { DesignThinking, BusinessManagement, SoftwareEngineer, Menu },
  computed: {}
};
</script>