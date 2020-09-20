<template>
  <v-responsive class="component-container" >
    <v-container grid-list-xl>
      <v-row class="solution">
        <v-col cols="12" md="8">
          <v-hover v-slot:default="{ hover }">
            <v-card
                rounded="lg"
                width="850"
                height="auto"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                :style="{'background-color': '#fff', 'background-size': 'cover'}"
            >
              <div>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item>
                      <v-card-text class="headline ml-0 mt-5">
                        <h1
                            :style="{'font-family': 'IBM Plex Sans', 'font-size': '38px', 'line-height': '56px'}"
                        >Our Solution</h1>
                      </v-card-text>
                    </v-list-item>
                    <v-list-item>
                      <v-card-text
                          class="prop mt-n10 pr-5"
                          :style="{'font-family': 'IBM Plex Sans', 'font-size': '24px', 'line-height': '42px'}"
                      >An online platform that seeks to alleviate the problem of distribution channel between farmers and consumers of farm produce by leveraging on a network of users traveling to various destinations of interest.</v-card-text>
                    </v-list-item>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
  })
};
</script>

<style scoped>
.headline {
  line-height: 31px;
  font-style: normal;
  font-weight: bold;
  color: #F56C08;
  text-align: center;
}
.prop {
  font-family: IBM Plex Sans, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.69);
  text-align: center;
}
v-card {
  transition: opacity 0.4s ease-in-out;
}
v-card:not(.on-hover) {
  opacity: 0.6;
}
.component-container {
  background-color: #E4F0D4;
}
.solution {
  justify-content: center;
}
</style>