<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          append-icon="mdi-magnify"
          label="Search by Department name"
          solo-inverted
          flat
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="2">
        <v-btn elevation="elevate" color="red" dark class="pa-6 ml-14">+ Create</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="my-4" cols="12" md="4" v-for="(card, index) in cards" :key="index">
        <DepartmentCard :cards="card" />
      </v-col>
    </v-row>
    <v-row class="mb-14">
      <v-col class="my-4" cols="12" md="4" v-for="(card) in cards" :key="card.department">
        <DepartmentCard :cards="card" />
      </v-col>
      <v-col class="my-4" cols="12" md="4" v-for="(card) in cards" :key="card.id">
        <DepartmentCard :cards="card" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.all-departments-header {
  color: lightgray;
}
</style>



<script>
import DepartmentCard from "./DepartmentCard";
export default {
  data() {
    return {
      elevate: false,
      department: "design"
    };
  },

  components: {
    DepartmentCard
  },
  computed: {
    cards() {
      return [
        {
          id: 0,
          department: "Research ",
          avatars: [
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            }
          ]
        },
        {
          id: 1,
          department: "UX Research",
          avatars: [
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            }
          ]
        },
        {
          id: 2,
          department: "Disciplinary",
          avatars: [
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            },
            {
              image: require("../../../../assets/cynthia.png")
            }
          ]
        }
      ];
    }
  }
};
</script>