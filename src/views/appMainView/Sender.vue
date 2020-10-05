<template>
  <div class="component-container">
    <SenderTabs />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import SenderTabs from "../../components/mainViews/sendOrders/SenderTabs";
export default {
  name: "Senders",
  components: {
    SenderTabs
  }
};
</script>
<style scoped>
.component-container {
  background-color: #E4F0D4;
}
</style>