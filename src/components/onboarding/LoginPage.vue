<template>
  <v-row class="pt-0">
    <v-col cols="12" md="6">
      <div class="login-coloumn-left mx-auto">
        <ValidationObserver v-slot="{ handleSubmit }">
          <v-form class="my-auto" @submit.prevent="handleSubmit(handleLogin)">
            <h3 class="login-title">Welcome back</h3>
            <div v-if="errorMsg">
              <span class="err text-xl-center">{{ errorMsg }}</span>
            </div>
            <Loader :loading="loading" :message="message" />

            <ValidationProvider
              name="E-mail"
              rules="required|email"
              v-slot="{ errors }"
            >
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
            <ValidationProvider
              name="password"
              rules="required|min:6"
              v-slot="{ errors }"
            >
              <span class="err">{{ errors[0] }}</span>
              <v-text-field
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
                label="Password"
                name="password"
                v-model="user.password"
                outlined
                color="red"
                class="register-input"
              ></v-text-field>
            </ValidationProvider>
            <SubmitButton button-name="Login" class="login-btn" />
            <v-btn depressed to="/password-reset" light class="forgot-password"
              >Forgot your password?</v-btn
            >
          </v-form>
        </ValidationObserver>
      </div>
    </v-col>
    <v-col cols="12" md="6" class="d-none d-md-flex login-coloumn">
      <div class="mx-auto">
        <img src="../../assets/desk-illo.svg" width="600px" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import SubmitButton from "../ui/buttons/SubmitButton";
import User from "../../models/user";
import Loader from "../ui/loader/Loader";

export default {
  name: "LoginPage",
  components: { Loader, SubmitButton },
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: ".",
      errorMsg: "",
      value: true
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.onboarding.status.loggedIn;
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      if (this.user.email && this.user.password) {
        this.$store.dispatch("onboarding/userLogin", this.user).then(
          res => {
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
.forgot-password {
  color: red;
  background-color: white !important;
  margin-left: 8rem;
  text-shadow: none;
}
.login-coloumn {
  background-color: #fff0ce;
  min-height: 92vh;
}
.login-coloumn div img {
  margin-top: 10rem !important;
}
.login-coloumn-left {
  margin-top: 10rem !important;
  width: 30rem !important;
}

.login-title {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 50px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  /*margin-bottom: 15px;*/

  color: #2b1c1c;
}

.v-text-field {
  height: 70px !important;
  border-radius: 6px !important;
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
</style>
