<template>
  <v-responsive class="component-container" >
    <v-container fluid grid-list-xl>
      <v-row class="solution">
        <v-col cols="12" md="8">
          <v-hover v-slot:default="{ hover }">
            <v-card
                rounded="lg"
                width="450"
                height="550"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                :style="{'background-color': '#E4F0D4', 'background-size': 'cover'}"
            >
              <v-list-item class="ml-8 mt-10">
                <img src="../../assets/vitaNova/thumbs-up-orange.svg" class="success-circle" alt=""/>
              </v-list-item>
              <div>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item>
                      <v-card-text class="headline ml-0 mt-2">
                        <h1
                            :style="{'font-family': 'IBM Plex Sans', 'font-size': '38px', 'line-height': '56px'}"
                        >Done</h1>
                      </v-card-text>
                    </v-list-item>
                    <v-list-item>
                      <v-card-text
                          class="prop mt-n8 pr-5"
                          :style="{'font-family': 'IBM Plex Sans', 'font-size': '24px', 'line-height': '42px'}"
                      >Please wait while we find Active Distributors for you.</v-card-text>
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
  text-align: left;
}
.prop {
  font-family: IBM Plex Sans, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.69);
  text-align: left;
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
.success-circle {
 height: 73px !important;
 min-width: 73px !important;
 width: 73px !important;
 margin-top: 25% !important;
 margin-bottom: 10px !important;
}
</style>
