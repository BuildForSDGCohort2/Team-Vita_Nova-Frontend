<template>
  <v-responsive>
  <v-card max-width="1050" class="mx-auto" elevation="0">
    <h3
      style="padding-left:10px;
               padding-bottom: 20px;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    "
    >
      Top Software Development Courses
    </h3>

    <v-container>
      <v-row>
        <v-col v-for="(soft, i) in software" :key="i" cols="6">
          <v-card :color="soft.color" elevation="0">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-3" size="150" tile>
                <v-img :src="soft.src"></v-img>
              </v-avatar>

              <div>
                <v-card-subtitle
                  v-text="soft.course"
                  style="color: #FF2E2E; padding-bottom: 0px"
                ></v-card-subtitle>
                <v-card-title
                  class="headline"
                  v-text="soft.title"
                ></v-card-title>

                <v-card-subtitle v-text="soft.artist"></v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-btn @click="showAll" style="color: #FF2E2E">Show All >></v-btn>
    </v-container>

    <h3
      style="padding-left:10px;
               padding-bottom: 20px;
               padding-top: 8%;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    "
    >
      Top Business Management Courses
    </h3>

    <v-container>
      <v-row>
        <v-col v-for="(busi, i) in business" :key="i" cols="6">
          <v-card :color="busi.color">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="busi.src"></v-img>
              </v-avatar>

              <div>
                <v-card-subtitle
                    v-text="busi.course"
                    style="color: #FF2E2E; padding-bottom: 0px"
                ></v-card-subtitle>
                <v-card-title
                  class="headline"
                  v-text="busi.title"
                ></v-card-title>

                <v-card-subtitle v-text="busi.artist"></v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-btn @click="showAll" style="color: #FF2E2E">Show All  >></v-btn>
    </v-container>

    <h3
      style="padding-left:10px;
               padding-bottom: 20px;
               padding-top: 8%;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    "
    >
      Top Design Thinking Courses
    </h3>

    <v-container>
      <v-row>
        <v-col v-for="(design, i) in designs" :key="i" cols="6">
          <v-card :color="design.color">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="design.src"></v-img>
              </v-avatar>

              <div>
                <v-card-subtitle
                    v-text="design.course"
                    style="color: #FF2E2E; padding-bottom: 0px"
                ></v-card-subtitle>

                <v-card-title
                  class="headline"
                  v-text="design.title"
                ></v-card-title>

                <v-card-subtitle v-text="design.artist"></v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-btn @click="showAll" style="color: #FF2E2E">Show All  >></v-btn>
    </v-container>
  </v-card>
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    software: [
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
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Introduction to Java For Web Development",
        artist: "Wale Adenuga - 6hrs 30minutes",
        course: "Web Development"
      },

      {
        color: "#F8F8F8",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Introduction to Flutter For Web Development",
        artist: "Ellie Goulding",
        course: "Web Development"
      }
    ],

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
        artist: "Ellie Goulding",
        course: "Web Development"
      }
    ],

    designs: [
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
        artist: "Ellie Goulding",
        course: "Web Development"
      }
    ]
  })
};
</script>
