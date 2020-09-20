<template>
  <v-responsive class="component-container">
    <v-container grid-list-md>
      <v-row class="align-center justify-center">
        <v-col cols="12" md="8" sm="6">
          <template>
            <v-card
                class="card pa-2"
                max-width="844"
                height="600"
                :style="{'background-color': '#E4F0D4', 'background-size': 'cover'}">
              <v-row class="row-input mt-8">
                <v-col cols="12" md="8" sm="6">
                  <ValidationObserver v-slot="{ handleSubmit }">
                    <v-form class="login-form" @submit.prevent="handleSubmit(handleRest)">
                      <h4 class="login-title pa-2"
                          :style="{'font-family': 'IBM Plex Sans'}">
                        Reset your password
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
                          button-name="Reset Password"
                          class="login-btn"
                      />
                      <v-btn text class="link red--text" link to="/login">Back to Login</v-btn>
                    </v-form>
                  </ValidationObserver>
                </v-col>
              </v-row>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
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
  computed: {
    loggedIn() {
      return this.$store.state.onboarding.status.loggedIn;
    }
  }

}
</script>

<style scoped>
.component-container {
  background-color: #E4F0D4;
}
.row-input {
  justify-content: center;
}
.login-title {
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #2b1c1c;
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
.align-center {
  *margin-top: 20% !important;
}
@media only screen and (max-width: 600px) {
  .login-form {
    margin-left: 9%;
    margin-right: 9%;
  }
  .login-title {
    font-size: 20px;
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
}
</style>
