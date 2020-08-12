<template>
  <v-main class="pa-0">
    <v-col class="pa-0">
      <v-layout row>
<<<<<<< HEAD
        <v-flex class="sm-12 md-3 lg-3 ">
          <div class="login-card ">
            <div class="mx-auto">
              <ValidationObserver v-slot="{ handleSubmit }">
                <v-form
                  class="login-form"
                  @submit.prevent="handleSubmit(handleLogin)"
                >
                  <h4 class="login-title pa-2">Reset your <br />password</h4>
=======
        <v-flex class="sm-12 md-3 lg-3">
          <div class="login-card">
            <div class="mx-auto">
              <ValidationObserver v-slot="{ handleSubmit }">
                <v-form class="login-form" @submit.prevent="handleSubmit(handleLogin)">
                  <h4 class="login-title pa-2">
                    Reset your
                    <br />password
                  </h4>
>>>>>>> c1941650879b0b865d556073373c517baea335fc

                  <div v-if="errorMsg">
                    <span class="err text-xl-center">{{ errorMsg }}</span>
                  </div>
                  <Loader :loading="loading" :message="message" />

<<<<<<< HEAD
                  <ValidationProvider
                    name="E-mail"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
=======
                  <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
>>>>>>> c1941650879b0b865d556073373c517baea335fc
                    <span class="err">{{ errors[0] }}</span>
                    <v-text-field
                      label="Email Address"
                      name="emailAddress"
                      v-model="user.email"
                      outlined
                      color="red"
                      class="register-input"
                    ></v-text-field>
                  </ValidationProvider>
                  <SubmitButton
                    button-name="Send email with reset password link"
                    class="login-btn"
                  />
<<<<<<< HEAD
                  <v-btn text class="link red--text " link to="/login"
                    >Back to Login</v-btn
                  >
=======
                  <v-btn text class="link red--text" link to="/login">Back to Login</v-btn>
>>>>>>> c1941650879b0b865d556073373c517baea335fc
                </v-form>
              </ValidationObserver>
            </div>
          </div>
        </v-flex>
        <v-row>
          <v-flex class="right-col sm-12 3 lg-8">
            <v-responsive>
<<<<<<< HEAD
              <img
                class="align-center mx-auto"
                src="../../assets/desk-illo.svg"
                alt="dispaly"
              />
=======
              <img class="align-center mx-auto" src="../../assets/desk-illo.svg" alt="dispaly" />
>>>>>>> c1941650879b0b865d556073373c517baea335fc
            </v-responsive>
          </v-flex>
        </v-row>
      </v-layout>
    </v-col>
  </v-main>
</template>

<script>
import SubmitButton from "../ui/buttons/SubmitButton";
import User from "../../models/user";
import Loader from "../ui/loader/Loader";
<<<<<<< HEAD

=======
>>>>>>> c1941650879b0b865d556073373c517baea335fc
export default {
  name: "ResetPassword",
  components: { Loader, SubmitButton },
  data() {
    return {
<<<<<<< HEAD
      title:"resetPassword",
=======
      title: "resetPassword",
>>>>>>> c1941650879b0b865d556073373c517baea335fc
      user: new User("", ""),
      loading: false,
      message: ".",
      errorMsg: "",
      value: true
    };
  },
  created() {
    if (this.loggedIn) {
      console.log("hi");
      this.$router.push("/cooperate/dashboard");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      if (this.user.email && this.user.password) {
        this.$store.dispatch("onboarding/userLogin", this.user).then(
          res => {
            console.log(res.access);
<<<<<<< HEAD

=======
>>>>>>> c1941650879b0b865d556073373c517baea335fc
            this.$router.push("/cooperate/dashboard");
          },
          error => {
            this.loading = false;
            this.errorMsg = error;
            // this.errorMsg= (error.response && error.response.data)
            // ||error.message || error.toString();
          }
        );
      }
    }
  }
};
</script>

<style scoped>
.login-card {
  margin-top: 100px;
  width: 500px;
  margin-right: 105px;
<<<<<<< HEAD

=======
>>>>>>> c1941650879b0b865d556073373c517baea335fc
  /*border: 1px solid #F8F8F8;*/
  /*box-sizing: border-box;*/
  /*box-shadow: 0px 1px 2px rgba(43, 28, 28, 0.15);*/
  border-radius: 10px;
}
.login-title {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 45px;
  /* or 133% */
<<<<<<< HEAD

  display: flex;
  align-items: center;

=======
  display: flex;
  align-items: center;
>>>>>>> c1941650879b0b865d556073373c517baea335fc
  color: #2b1c1c;
}
.v-text-field {
  height: 70px !important;
  border-radius: 8px !important;
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
<<<<<<< HEAD

=======
>>>>>>> c1941650879b0b865d556073373c517baea335fc
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
<<<<<<< HEAD

=======
>>>>>>> c1941650879b0b865d556073373c517baea335fc
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> c1941650879b0b865d556073373c517baea335fc
