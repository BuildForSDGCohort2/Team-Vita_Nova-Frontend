<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <h1>My Departments</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          append-icon="mdi-magnify"
          label="Search by Department name"
          solo-inverted
          flat
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
        <DepartmentCard :cards="card" />
      </v-col>
    </v-row>
    <v-row class="all-departments">
      <v-col cols="12">
        <h3 class="all-departments-header">All Departments</h3>
      </v-col>
      <v-col cols="12" md="4" v-for="(card) in cards" :key="card.department">
        <DepartmentCard :cards="card" />
      </v-col>
      <v-col cols="12" md="4" v-for="(card) in cards" :key="card.id">
        <DepartmentCard :cards="card" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.all-departments {
  margin-top: 6rem;
}
.all-departments-header {
  color: lightgray;
}
</style>



<script>
import DepartmentCard from "./DepartmentCard";
export default {
  components: {
    DepartmentCard
  },
  computed: {
    cards() {
      return [
        {
          id: 0,
          department: "Research &amp Development",
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