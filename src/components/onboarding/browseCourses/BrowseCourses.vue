<template>
  <div>
    <v-card max-width="1450" class="mx-auto" elevation="0">
      <h3
          :style="{'font-family': 'IBM Plex Sans'}"
        style="padding-left: 3%;
               padding-bottom: 20px;
              font-style: normal;
              font-weight: 300;
              font-size: 24px;
              line-height: 62px;

              letter-spacing: 1px;
              text-transform: capitalize;

              color: #2B1C1C;
                  "
      >
        Business Management & Marketing Courses
      </h3>
      <SoftwareEngineer />

      <h3
          :style="{'font-family': 'IBM Plex Sans'}"
          style="padding-left: 3%;
               padding-bottom: 20px;
              font-style: normal;
              font-weight: 300;
              font-size: 24px;
              line-height: 62px;

              letter-spacing: 1px;
              text-transform: capitalize;

              color: #2B1C1C;
                  "
      >
        Top Business Management Courses
      </h3>
      <BusinessManagement />

      <h3
          :style="{'font-family': 'IBM Plex Sans'}"
          style="padding-left: 3%;
               padding-bottom: 20px;
              font-style: normal;
              font-weight: 300;
              font-size: 24px;
              line-height: 62px;

              letter-spacing: 1px;
              text-transform: capitalize;

              color: #2B1C1C;
                  "
      >
        Top Design Thinking Courses
      </h3>
      <DesignThinking />
    </v-card>
  </div>
</template>

<script>
import SoftwareEngineer from "@/components/onboarding/browseCourses/SoftwareEngineer";
import BusinessManagement from "@/components/onboarding/browseCourses/BusinessManagement";
import DesignThinking from "@/components/onboarding/browseCourses/DesignThinking";

export default {
  components: { DesignThinking, BusinessManagement, SoftwareEngineer },
  computed: {}
};
</script>
