<template>
  <v-container>
      <div class="d-flex justify-space-between flex-xs-column">
        <v-text-field
          append-icon="mdi-magnify"
          label="Search by Department name"
          solo-inverted
          flat
          style="max-width: 400px"
        ></v-text-field>
        <v-btn class="v-size--large red white--text">
          <v-icon dark left>mdi-plus </v-icon>
          Create</v-btn>
      </div>
    <v-row class="mt-5">
      <v-col cols="12" md="4" sm="6" v-for="(card) in cards" :key="card.department">
        <DepartmentCard :cards="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

  @media (max-width: 450px) {
    .flex-xs-column {
      flex-direction: column !important;
    }
  }

</style>



<script>
import DepartmentCard from "./DepartmentCard";
export default {
  name: "Department",
  components: {
    DepartmentCard
  },
  computed: {
    cards() {
      return [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
        },
        {
          id: 4,
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
          id: 5,
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
          id: 6,
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
          id: 7,
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
          id: 8,
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
          id: 9,
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
      ];
    }
  }
};
</script>