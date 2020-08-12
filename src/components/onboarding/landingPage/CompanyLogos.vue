<<<<<<< HEAD
<template>
  <v-container class="component-container">
    <p class="text-center">Trusted by Africa's leading companies</p>
    <v-row>
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
        src: "https://nigerialogos.com/logos/mtn/mtn.svg",
        flex: 12
      },
      {
        title: 2,
        src: "https://nigerialogos.com/logos/stanbic_ibtc/stanbic_ibtc.svg",
        flex: 6
      },
      {
        title: 3,
        src:
          "https://nigerialogos.com/logos/standard_chartered/standard_chartered.svg",
        flex: 6
      },
      {
        title: 4,
        src: "https://nigerialogos.com/logos/access_bank/access_bank.svg",
        flex: 6
      },
      {
        title: 5,
        src: "https://nigerialogos.com/logos/access_bank/access_bank.svg",
        flex: 6
      }
    ]
  })
};
</script>

<style  scoped>
.component-container {
  margin-top: 40px !important;
}
.text-center {
  color: grey;
}
=======
<template>
  <v-container class="component-container">
    <p class="text-center">Trusted by Africa's leading companies</p>
    <v-row>
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
        src: "https://nigerialogos.com/logos/mtn/mtn.svg",
        flex: 12
      },
      {
        title: 2,
        src: "https://nigerialogos.com/logos/stanbic_ibtc/stanbic_ibtc.svg",
        flex: 6
      },
      {
        title: 3,
        src:
          "https://nigerialogos.com/logos/standard_chartered/standard_chartered.svg",
        flex: 6
      },
      {
        title: 4,
        src: "https://nigerialogos.com/logos/access_bank/access_bank.svg",
        flex: 6
      },
      {
        title: 5,
        src: "https://nigerialogos.com/logos/access_bank/access_bank.svg",
        flex: 6
      }
    ]
  })
};
</script>

<style  scoped>
.component-container {
  margin-top: 40px !important;
}
.text-center {
  color: grey;
}
>>>>>>> c1941650879b0b865d556073373c517baea335fc
</style>