<template>
  <div>
    <Tabs />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>


<script>
import Tabs from "../../components/native/pages/dashboard/Tabs";
export default {
  components: {
    Tabs
  }
};
</script>