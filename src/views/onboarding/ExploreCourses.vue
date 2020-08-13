<template>
  <v-responsive>
    <br />
    <Menu />

    <br />
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
  </v-responsive>
</template>

<script>
import Menu from "../../components/onboarding/exploreCourses/Menu";
import SoftwareEngineer from "../../components/onboarding/exploreCourses/SoftwareEngineer";
import BusinessManagement from "../../components/onboarding/exploreCourses/BusinessManagement";
import DesignThinking from "../../components/onboarding/exploreCourses/DesignThinking";
export default {
  components: { DesignThinking, BusinessManagement, SoftwareEngineer, Menu },
  computed: {}
};
</script>