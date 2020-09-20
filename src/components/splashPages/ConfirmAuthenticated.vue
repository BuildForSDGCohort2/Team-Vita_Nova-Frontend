<template>
  <v-container fluid class="confirm-amail-background">
    <v-card width="500" height="600px" class="success-top ma-auto">
      <v-main class="success-container">
        <v-list-item>
          <img src="../../assets/thumbs-up-orange.svg" class="success-circle" alt=""/>
        </v-list-item>
        <v-card-text class="success-title text-wrap" :style="{'font-family': 'IBM Plex Sans'}">
          <h6>
            Account
            <br />Authentication
          </h6>
        </v-card-text>

        <v-card-text class="success-text" :style="{'font-family': 'IBM Plex Sans'}">
          <p>
            Your account has been authenticated successfully.
            Kindly click the button below to log in to the platform
          </p>
        </v-card-text>
        <v-card-actions>
          <v-row class="solution">
            <v-col cols="12 md=8" sm="6">
              <ValidationObserver v-slot="{ handleSubmit }">
                <v-form
                    class="course-form"
                    v-if="!submitted"
                    @submit.prevent="handleSubmit(handleVerification)">
                  <div>
                    <SubmitButton button-name="Login" />
                  </div>
                </v-form>
              </ValidationObserver>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-main>
    </v-card>
  </v-container>
</template>

<script>
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import { ValidationObserver } from "vee-validate";
import {verifyEmail} from "@/services/auth-services";

export default {
  name: "ConfirmAuthenticationPage",
  components: {
    SubmitButton,
    ValidationObserver
  },
  data() {
    return {
      submitted: false,
      loading: false,
    }
  },
  methods: {
    handleVerification() {
      this.loading = true;
      console.log(this.$route.query.user_id)
      // let user = {
      //   "user_id": this.$route.params.user_id,
      //   "timestamp": this.$route.params.tamp,
      //   "signature": this.$route.params.signature
      // };
      // console.log(user);
      // verifyEmail(user).then(
      //     res => {
      //       console.log(res.data);
      //       this.$router.push({ path: '/login' });
      //     },
      //     error => {
      //       this.loading = false;
      //       console.log(error.response);
      //       this.errorMsg = error.response.data.detail;
      //     }
      // );
    },
  }
};
</script>

<style scoped>
.confirm-amail-background {
  background-color: #E4F0D4 !important;
}
.success-top {
  /*margin-top: 5% !important;*/
  border-radius: 6px !important;
  border-bottom: 0 !important;
  background-color: #E4F0D4 !important;
}
.success-container {
  margin-left: 25%;
  margin-right: 25%;
  padding-top: 10%;
}
.success-circle {
  height: 73px !important;
  min-width: 73px !important;
  width: 73px !important;
  margin-top: 15% !important;
  margin-bottom: 20px !important;
}
.success-title {
  font-style: normal;
  font-weight: bold;
  font-size: 49px;
  line-height: 35px;
  /*display: flex;*/
  align-items: center;
  letter-spacing: -0.02em;
  padding: 0 !important;
  color: #F56C08;
  margin-bottom: 20px;
}
.success-text {
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-bottom: 30px;
  padding: 0 !important;

  color: #2b1c1c;
}
</style>