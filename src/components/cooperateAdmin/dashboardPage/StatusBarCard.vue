<<<<<<< HEAD
<template>
  <v-card class="my-16 mx-auto" max-width="800" color="#431288" height="200">
    <v-list-item>
      <v-list-item-content>
        <v-card-title class="card-title">Hello PM</v-card-title>

        <v-card-subtitle class="sub-title pt-3">Your company profile is {{value}}% complete</v-card-subtitle>
        <span>{{value}}%</span>
        <v-progress-linear :value="value" color="#00A998" rounded></v-progress-linear>
      </v-list-item-content>
    </v-list-item>
  </v-card>
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
.mx-auto {
  background-image: url("../../../assets/Asset.png");
  background-position: right;
}
.card-title {
  color: #fff !important;
  font-weight: bold;
}
.sub-title {
  color: rgb(241, 241, 241) !important;
  opacity: 0.6 !important ;
}
.v-progress-linear {
  margin-left: 54px !important;
  height: 5px !important;
  bottom: 12px;
}
span {
  color: #fff;
  margin-left: 14px !important;
  font-weight: bold;
}
=======
<template>
  <v-card class="my-16 mx-auto" max-width="800" color="#431288" height="200">
    <v-list-item>
      <v-list-item-content>
        <v-card-title class="card-title">Hello PM</v-card-title>

        <v-card-subtitle class="sub-title pt-3">Your company profile is {{value}}% complete</v-card-subtitle>
        <span>{{value}}%</span>
        <v-progress-linear :value="value" color="#00A998" rounded></v-progress-linear>
      </v-list-item-content>
    </v-list-item>
  </v-card>
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
.mx-auto {
  background-image: url("../../../assets/Asset.png");
  background-position: right;
}
.card-title {
  color: #fff !important;
  font-weight: bold;
}
.sub-title {
  color: rgb(241, 241, 241) !important;
  opacity: 0.6 !important ;
}
.v-progress-linear {
  margin-left: 54px !important;
  height: 5px !important;
  bottom: 12px;
}
span {
  color: #fff;
  margin-left: 14px !important;
  font-weight: bold;
}
>>>>>>> c1941650879b0b865d556073373c517baea335fc
</style>