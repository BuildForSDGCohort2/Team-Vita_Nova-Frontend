<template>
  <div>
    <ProfileBar />
    <Cards />
  </div>
</template>

<script>
import ProfileBar from "../../components/native/pages/dashboard/home/ProfileBar";
import Cards from "../../components/native/pages/dashboard/home/Cards";
export default {
  components: {
    ProfileBar,
    Cards
  }
};
</script>