<template>
  <v-responsive class="component-container" >
    <v-container grid-list-xl>
      <v-row class="solution">
        <v-col>
          <v-card
              flat
              rounded="lg"
              width="auto"
              height="500"
              :style="{'background-color': '#E4F0D4', 'background-size': 'cover'}"
          >
            <div>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item>
                    <v-card-text class="headline ml-0 mt-5">
                      <h1
                          :style="{'font-family': 'IBM Plex Sans', 'font-size': '38px', 'line-height': '56px'}"
                      >About Us</h1>
                    </v-card-text>
                  </v-list-item>
                  <v-list-item>
                    <v-card-text
                        class="prop mt-0 pr-5"
                        :style="{'font-family': 'IBM Plex Sans', 'font-size': '24px', 'line-height': '42px'}"
                    >An online platform that seeks to alleviate the problem of distribution channel between farmers and consumers of farm produce by leveraging on a network of users traveling to various destinations of interest.</v-card-text>
                  </v-list-item>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
export default {
  components: {
  }
};
</script>

<style scoped>
.component-container {
  background-color: #E4F0D4;
}
.hero-section-item h1 {
  font-size: 22px !important;
  font-weight: bold;
}
.headline {
  line-height: 31px;
  font-style: normal;
  font-weight: bold;
  color: #F56C08;
  text-align: left;
}
.prop {
  font-family: IBM Plex Sans, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.69);
  text-align: justify;
}
.solution {
  justify-content: start;
}
</style>