<template>
  <div>
    <Tabs />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import Tabs from "../../components/corporateAdmin/employee/Tabs";
export default {
  name: "Employee",
  components: {
    Tabs
  }
};
</script>