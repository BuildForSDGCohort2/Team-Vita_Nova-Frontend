<template>
  <div>
    <Tabs />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import Tabs from "../../components/cooperateAdmin/employee/Tabs";
export default {
  name: "Employee",
  components: {
    Tabs
  }
};
</script>