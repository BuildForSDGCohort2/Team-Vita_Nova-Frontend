<template>
  <v-card
      max-width="1050"
      class="mx-auto"
      elevation="0"
  >

    <h3 style="padding-left:10px;
               padding-bottom: 20px;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    ">Top Software Development Courses</h3>

    <v-container>
      <v-row >

        <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="6"
        >
          <v-card
              :color="item.color"
              elevation="0"

          >
            <div class="d-flex flex-no-wrap justify-space-between">

              <v-avatar
                  class="ma-3"
                  size="150"
                  tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>

              <div>
                <v-card-subtitle v-text="item.course" style="color: #FF2E2E; padding-bottom: 0px"></v-card-subtitle>
                <v-card-title
                    class="headline"
                    v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <p style="color: #FF2E2E">Show All >></p>
    </v-container>

    <h3 style="padding-left:10px;
               padding-bottom: 20px;
               padding-top: 8%;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    ">Top Business Management Courses</h3>

    <v-container>
      <v-row >

        <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="6"
        >
          <v-card
              :color="item.color"

          >
            <div class="d-flex flex-no-wrap justify-space-between">

              <v-avatar
                  class="ma-3"
                  size="125"
                  tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>

              <div>
                <v-card-title
                    class="headline"
                    v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <h3 style="padding-left:10px;
               padding-bottom: 20px;
               padding-top: 8%;
               font-family: IBM Plex Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 36px;
    ">Top Design Thinking Courses</h3>

    <v-container>
      <v-row >

        <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="6"
        >
          <v-card
              :color="item.color"

          >
            <div class="d-flex flex-no-wrap justify-space-between">

              <v-avatar
                  class="ma-3"
                  size="125"
                  tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>

              <div>
                <v-card-title
                    class="headline"
                    v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: '#F8F8F8',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Introduction to Java For Web Development',
        artist: 'Wale Adenuga - 6hrs 30minutes',
        course: 'Web Development'
      },

      {
        color: '#F8F8F8',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Introduction to Java For Web Development',
        artist: 'Wale Adenuga - 6hrs 30minutes',
        course: 'Web Development'
      },
      {
        color: '#F8F8F8',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Introduction to Java For Web Development',
        artist: 'Wale Adenuga - 6hrs 30minutes',
        course: 'Web Development'
      },

      {
        color: '#F8F8F8',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Introduction to Flutter For Web Development',
        artist: 'Ellie Goulding',
        course: 'Web Development'
      },
    ],
  }),
}
</script>