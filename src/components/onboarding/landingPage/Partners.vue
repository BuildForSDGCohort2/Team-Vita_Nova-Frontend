<template>
  <v-container class="component-container">
    <p class="text-center">Our Partners</p>
    <v-row class="mt-16">
      <v-col v-for="card in cards" :key="card.title" cols="6" md="2" class="ml-md-8">
        <v-img :src="card.src"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: 1,
        src: require("../../../assets/Henley.png"),
        flex: 12
      },
      {
        title: 2,
        src: require("../../../assets/Atlassian.png"),
        flex: 6
      },
      {
        title: 3,
        src: require("../../../assets/fw.png"),
        flex: 6
      },
      {
        title: 4,
        src: require("../../../assets/aws.png"),
        flex: 6
      },
      {
        title: 5,
        src: require("../../../assets/drupal.png"),
        flex: 6
      }
    ]
  })
};
</script>

<style  scoped>
.component-container {
  margin-top: 10rem !important;
}
.text-center {
  color: grey;
}
</style>