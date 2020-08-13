<template>
  <v-card color="#000" rounded="lg" elevation="6" width="600" height="300">
    <v-list-item>
      <v-card-text class="headline font-weight-bold">{{ cards.course }}</v-card-text>
      <v-icon color="#fff">mdi-dots-vertical</v-icon>
    </v-list-item>
    <v-list-item>
      <v-card-text class="headline font-weight-light">{{ cards.subtitle }}</v-card-text>
    </v-list-item>

  </v-card>
</template>

<style scoped>
.headline {
  /* View Menu */

  /*position: absolute;*/
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
</style>

<script>
export default {
  methods: {

  },
  props: {
    cards: Object
  }
};
</script>