<template>
  <div :style="{'font-family': 'IBM Plex Sans'}">
    <v-row>
      <v-col  md="4" sm="6" v-for="(soft, i) in software" :key="i" :loading="loading">
        <v-hover v-slot:default="{ hover }">
          <v-card
              class="mx-auto pa-1"
              rounded="lg"
              width="350"
              height="420"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              style="background-size: cover"
          >
            <div class="overlay">
              <v-card rounded="lg" flat
                      class="ma-2">
                <v-img height="200" :src="soft.src"></v-img>
              </v-card>
            </div>
            <v-list-item>
              <v-card-text
                  v-text="soft.course.toLowerCase()"
                  class="ml-n4"
                  :style="{'font-family': 'IBM Plex Sans', 'line-height': '33px', 'text-transform': 'capitalize', 'font-size': '24px', 'color': '#2B1C1C', 'font-weight': 'bold'}">
              </v-card-text>
            </v-list-item>

            <v-list-item>
              <v-card-text
                  v-text="soft.company" class="ml-n4 subtitle-1"
                  :style="{'font-family': 'IBM Plex Sans', 'font-size': '14px'}"
              ></v-card-text>
            </v-list-item>
            <v-footer
                absolute
                class="font-weight-medium my-3"
                :style="{'color': '#FF2E2E', 'opacity': 1, 'background-color': 'rgba(0,0,0,0.0)'}"
            >
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
            </v-footer>

          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DesignThinking",
  data: () => ({
    loading: false,
    selection: 1,

    software: [
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

<style scoped>
v-card {
  transition: opacity 0.4s ease-in-out;
}
v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>