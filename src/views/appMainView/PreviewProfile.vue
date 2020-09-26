<template>
  <div>
    <PreviewProfile  :event="events" />
  </div>
</template>

<script>
import PreviewProfile from "../../components/mainViews/companyProfile/PreviewProfile";
import UserService from "../../services/user-services";
export default {
  components: {
    PreviewProfile
  },
  data() {
    return {
      events: null
    };
  },
  created() {

     UserService.getProfile().then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log("there was an error:" + error);
      });
  }
};
</script>

<style scoped></style>
