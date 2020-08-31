<template>
  <v-main class="pa-0">
    <v-col class="pa-0">
      <v-layout row>
        <v-flex class="sm-12 md-3 lg-3">
          <div class="login-card">
            <div class="mx-auto">
              <ValidationObserver v-slot="{ handleSubmit }">
                <v-form class="login-form" @submit.prevent="handleSubmit(handleRest)">
                  <h4 class="login-title pa-2">
                    Reset your
                    <br />password
                  </h4>

                  <div v-if="errorMsg">
                    <span class="err text-xl-center">{{ errorMsg }}</span>
                  </div>
                  <Loader :loading="loading" :message="message" />
                  <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                    <span class="err">{{ errors[0] }}</span>
                    <v-text-field
                      label="Email Address"
                      name="emailAddress"
                      v-model="login"
                      outlined
                      color="red"
                      class="register-input"
                    ></v-text-field>
                  </ValidationProvider>
                  <SubmitButton
                    button-name="Send email with reset password link"
                    class="login-btn"
                  />
                  <v-btn text class="link red--text" link to="/login">Back to Login</v-btn>
                </v-form>
              </ValidationObserver>
            </div>
          </div>
        </v-flex>
        <v-row>
          <v-flex class="right-col sm-12 3 lg-8">
            <v-responsive>
              <img class="align-center mx-auto" src="../../assets/desk-illo.png" alt="dispaly" />
            </v-responsive>
          </v-flex>
        </v-row>
      </v-layout>
    </v-col>
  </v-main>
</template>

<script>
import SubmitButton from "../ui/buttons/SubmitButton";
import Loader from "../ui/loader/Loader";
import UserService from "../../services/user-services";
export default {
  name: "ResetPassword",
  components: {Loader, SubmitButton},
  data() {
    return {
      title: "resetPassword",
      loading: false,
      message: ".",
      errorMsg: "",
      value: true,
      login: ''
    };
  },

  methods: {
    handleRest() {
      this.loading = true;
      const info = {
                login: this.login
              };

        UserService.handleResetPassword(info).then(
                info => {
                  console.log(info.data);
                  alert('Reset requested has been submitted!');
                  this.$router.push("/login");
                },
                error => {
                  this.loading = false;
                  alert('Failed to update form please check required fields or network!');
                  console.log(error);
                  this.errorMsg = error.response.info.detail;
                })
      }
    },

}
</script>

<style scoped>
.login-card {
  margin-top: 100px;
  width: 500px;
  margin-right: 105px;
  border-radius: 10px;
}
.login-title {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #2b1c1c;
}
.login-form {
  margin-left: 17%;
}
.login-btn {
  margin-top: 20px !important;
}
.err {
  display: block;
  color: red;
  font-size: 13px;
  margin-bottom: 5px;
}
.right-col {
  background-color: #fff0ce !important;
  min-height: 100vh;
  padding-top: 90px;
}
.link {
  margin-left: 35% !important;
}
.align-center {
  /*margin: auto !important;*/
  /*align-content: center;*/
  /*align-items: center;*/
  *margin-top: 20% !important;
}
@media only screen and (max-width: 600px) {
  .login-form {
    margin-left: 9%;
    margin-right: 9%;
  }
  .login-card {
    width: 390px;
    border-radius: 0;
    box-shadow: none;
  }
  .login-title {
    font-size: 20px;
  }
  .right-col {
    display: none;
  }
  .login-btn {
    font-size: 100%;
  }
}
/* Landscape */
@media only screen and (min-width: 1366px) and (orientation: landscape) {
}
/*Portrait*/
@media only screen and (min-width: 1024px) and (orientation: portrait) {
  .login-card {
    margin-left: 170px;
    padding-top: 200px;
  }
  .right-col {
    display: none;
  }
}
</style>
