<template>
  <v-container>
    <v-row>
      <v-col v-for="(busi, i) in business" :key="i" cols="6">
        <v-card :color="busi.color" elevation="0">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="busi.src"></v-img>
            </v-avatar>

            <div>
              <v-card-subtitle v-text="busi.course" style="color: #FF2E2E; padding-bottom: 0px"></v-card-subtitle>
              <v-card-title class="headline" v-text="busi.title"></v-card-title>

              <v-card-subtitle class="ma-auto text-wrap" v-text="busi.artist"></v-card-subtitle>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-p @click="showAll" style="color: #FF2E2E">Show All >></v-p>
  </v-container>
</template>

<script>
export default {
  name: "BusinessManagement",
  data: () => ({
    business: [
      {
        color: "#F8F8F8",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Introduction to Java For Web Development",
        artist: "Wale Adenuga - 6hrs 30minutes",
        course: "Business Management"
      },
      {
        color: "#F8F8F8",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Introduction to Java For Web Development",
        artist: "Wale Adenuga - 6hrs 30minutes",
        course: "Web Development"
      },
      {
        color: "#F8F8F8",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Introduction to Java For Web Development",
        artist: "Wale Adenuga - 6hrs 30minutes",
        course: "Web Development"
      },
      {
        color: "#F8F8F8",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Introduction to Flutter For Web Development",
        artist: "Ellie Goulding - 6hrs 20minutes",
        course: "Web Development"
      }
    ]
  })
};
</script>

<style scoped>
</style>