<template>
  <div>
    <DistributorTabs />
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import DistributorTabs from "../../components/mainViews/distributorOrders/DistributorTabs";
export default {
  name: "Distributors",
  components: {
    DistributorTabs
  }
};
</script>
