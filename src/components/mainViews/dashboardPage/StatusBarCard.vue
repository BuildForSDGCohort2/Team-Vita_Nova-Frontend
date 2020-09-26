<template>
  <v-responsive>
    <v-container>
      <div :style="{'font-family': 'IBM Plex Sans'}">
        <v-row class="solution">
          <v-col cols="12" md="4" sm="8" class="">
            <template>
              <v-hover v-slot:default="{ hover }">
                <v-card
                    elevation="2"
                    raised
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    style="background-size: cover"
                    height="300"
                    class="card-style mx-auto align-self-stretch text-wrap"
                >
                  <template>
                    <v-card
                        class="subCard align-self-auto text-wrap"
                        flat
                        height="300"
                    >
                      <v-img height="300" src="../../../assets/vitaNova/i-stock-photo.jpg"></v-img>
                    </v-card>
                  </template>
                </v-card>
              </v-hover>
            </template>
          </v-col>
          <v-col cols="12" md="4" sm="8" class="">
            <template>
              <v-hover v-slot:default="{ hover }">
                <v-card
                    elevation="2"
                    raised
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    style="background-size: cover"
                    height="300"
                    class="card-style mx-auto align-self-stretch text-wrap"
                >
                  <template>
                    <v-card
                        class="subCard align-self-auto text-wrap"
                        flat
                        height="300"
                    >
                      <v-img height="300" src="../../../assets/vitaNova/kigali.jpg"></v-img>
                    </v-card>
                  </template>
                </v-card>
              </v-hover>
            </template>
          </v-col>
          <v-col cols="12" md="4" sm="8" class="">
            <template>
              <v-hover v-slot:default="{ hover }">
                <v-card
                    elevation="2"
                    raised
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    style="background-size: cover"
                    height="300"
                    class="card-style mx-auto align-self-stretch text-wrap"
                >
                  <template>
                    <v-card
                        class="subCard align-self-auto text-wrap"
                        flat
                        height="300"
                    >
                      <v-img height="300" src="../../../assets/vitaNova/tomato seller.jpeg"></v-img>
                    </v-card>
                  </template>
                </v-card>
              </v-hover>
            </template>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-responsive>
</template>

<script>
export default {
  data() {
    return {
      value: 40
    };
  }
};
</script>

<style scoped>
.headline {
  line-height: 31px;
  font-style: normal;
  font-weight: bold;
  color: #F56C08;
  text-align: justify;
}
</style>