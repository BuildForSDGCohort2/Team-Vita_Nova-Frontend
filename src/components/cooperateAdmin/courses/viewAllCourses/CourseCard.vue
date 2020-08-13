<template>
  <v-card rounded="lg" elevation="6" width="600" height="300" :style="{'background-image':`url(${ cards.courseImageLink })`}" style="background-size: cover">
    <div class="overlay">
      <v-list-item>
        <v-card-text class="headline font-weight-bold" style="margin-top: 40px;"><h3>{{ cards.course }}</h3></v-card-text>
        <v-btn icon>
          <v-icon color="#fff" style="margin-top: 40px">mdi-dots-vertical</v-icon>
        </v-btn>

      </v-list-item>
      <v-list-item>
        <v-card-text class="headline"><h6>{{ cards.subtitle }}</h6></v-card-text>
      </v-list-item>
    </div>
  </v-card>
</template>

<style scoped>
.headline {
  /* View Menu */

  left: 54.72%;
  right: 26.94%;
  top: 33.35%;
  bottom: 64.17%;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 21px;

  /* identical to box height */
  display: flex;
  align-items: center;

  color: #FFFFFF;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
</style>

<script>
export default {
  props: {
    cards: Object
  }
};
</script>