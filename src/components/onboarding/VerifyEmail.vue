<template>
  <div>
    <Loader :loading="loading" :message="message">
      <p>Please wait confirm your email</p>
    </Loader>
  </div>
</template>

<script>
import Loader from "@/components/ui/loader/Loader";
import {verifyEmail} from "@/services/auth-services";

export default {
  name: "VerifyEmail",
  components: { Loader },
  data() {
    return {
      loading: true,
      message: "Verifying your Email"
    };
  },
  created() {
    console.log(this.$route.query)
    verifyEmail(this.$route.query)
      .then(response => {
        console.log(response.data.message);
        this.$router.push("/login");
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>
