<template>
  <v-responsive>
    <div :style="{ 'font-family': 'IBM Plex Sans' }">
      <v-card max-width="1450" class="mx-auto" elevation="0">
        <v-row class=" align-center justify-center ">
          <h3
              style="
                  font-style: normal;
                  font-weight: 300;
                  font-size: 48px;
                  line-height: 62px;
                  margin-top: 15%;
                  display: flex;
                  text-wrap: normal;
                  text-align: center;
                  letter-spacing: 0.6px;
                  text-transform: capitalize;
                  color: #2B1C1C;
"
          >
            Exclusive course to equip your <br />
            team for the best
          </h3>
        </v-row>

        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search by Course name"
            solo-inverted
            style="max-width: 30%; margin: 0 auto; margin-top: 5%; margin-bottom: 3%;"
        ></v-text-field>

        <h3
            style="padding-left: 3%;
               padding-bottom: 20px;

              font-style: normal;
              font-weight: 300;
              font-size: 24px;
              line-height: 62px;

              letter-spacing: 0.6px;
              text-transform: capitalize;

              color: #2B1C1C;
                  "
        >
          Business Management & Marketing Courses
        </h3>
        <SoftwareEngineer />

        <h3
            style="padding-left: 3%;
               padding-bottom: 20px;

              font-style: normal;
              font-weight: 300;
              font-size: 24px;
              line-height: 62px;

              letter-spacing: 0.6px;
              text-transform: capitalize;

              color: #2B1C1C;
                  "
        >
          Top Business Management Courses
        </h3>
        <BusinessManagement />

        <h3
            style="padding-left: 3%;
               padding-bottom: 20px;

              font-style: normal;
              font-weight: 300;
              font-size: 24px;
              line-height: 62px;

              letter-spacing: 0.6px;
              text-transform: capitalize;

              color: #2B1C1C;
                  "
        >
          Top Design Thinking Courses
        </h3>
        <DesignThinking />
      </v-card>
    </div>
  </v-responsive>
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
