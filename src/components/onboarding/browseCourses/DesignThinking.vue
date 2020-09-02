<template>
  <v-responsive>
    <v-row class="overlay">
      <v-card v-for="(desi, i) in design" :key="i" cols="6" elevation="2" :loading="loading"
              class="mx-auto my-12 text-wrap"
              width="374">

        <v-img height="250" :src="desi.src"></v-img>

        <v-card-title v-text="desi.course"></v-card-title>
        <div v-text="desi.company" class="mx-4 subtitle-1">
        </div>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
            ></v-rating>

            <div class="grey--text ml-4">4.5 (413)</div>
          </v-row>
        </v-card-text>
      </v-card>

      <!--      <v-p @click="showAll" style="color: #FF2E2E; border: 0px; float: right"-->
      <!--      >View More >></v-p-->
      >
    </v-row>
  </v-responsive>
</template>

<script>
export default {
  name: "DesignThinking",
  data: () => ({
    loading: false,
    selection: 1,
    design: [
      {
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        course: "INTRODUCTION TO ROBOTICS",
        company: "Semicolon Africa"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        company: "Semicolon Africa",
        course: "CREATING STUNNING ENGAGEMENTS"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        company: "Semicolon Africa",
        course: "WEB DEVELOPMENT"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        course: "INTRODUCTION TO ROBOTICS",
        company: "Semicolon Africa"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        company: "Semicolon Africa",
        course: "GUIDE TO CREATING MOON MARKETING"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        course: "INTRODUCTION TO ROBOTICS",
        company: "Semicolon Africa"
      },
    ]
  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>

<style scoped></style>