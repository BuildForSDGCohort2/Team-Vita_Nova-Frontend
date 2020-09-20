<template>
  <v-responsive class="component-container">
    <v-container grid-list-md>
      <div>
        <v-row  class="align-center justify-center">
          <v-col cols="12" md="8" sm="6">
            <template>
              <v-card
                  class="card pa-2"
                  max-width="844"
                  height="600"
                  :style="{'background-color': '#E4F0D4', 'background-size': 'cover'}"
              >
                <ValidationObserver v-slot="{ handleSubmit }">
                  <v-form class="my-auto" @submit.prevent="handleSubmit(handleLogin)">
                    <v-row class="row-input mt-14">
                      <v-col cols="12" md="8" sm="6">
                        <h3 class="login-title">Welcome back</h3>
                      </v-col>
                    </v-row>
                    <div v-if="errorMsg">
                      <span class="err text-xl-center">{{ errorMsg }}</span>
                    </div>
                    <Loader :loading="loading" :message="message" />
                    <v-row class="row-input mt-n5">
                      <v-col cols="12" md="8" sm="6">
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
                              class="email register-input"
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                    </v-row>
                    <v-row class="row-input mt-n5">
                      <v-col cols="12" md="8" sm="6">
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
                              class="password register-input"
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                    </v-row>
                    <v-row class="row-input mt-n5">
                      <v-col cols="12" md="8" sm="6">
                        <SubmitButton button-name="Login" class="login-btn" />
                      </v-col>
                    </v-row>
                    <v-row class="row-input mt-n5">
                      <v-col cols="12" md="8" sm="6">
                        <v-btn depressed to="/password-reset" light class="forgot-password"
                        >Forgot password? Reset Password</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-form>
                </ValidationObserver>
              </v-card>
            </template>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-responsive>
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
            this.$router.push("/dashboard");
          },
          error => {
            this.loading = false;
            this.errorMsg = error;
          }
        );
      }
    }
  }
};
</script>

<style scoped>
.component-container {
  background-color: #E4F0D4;
}
.row-input {
  justify-content: center;
}
.forgot-password {
  color: #000000;
  background-color: #E4F0D4 !important;
  text-shadow: none;
  text-transform: capitalize !important;
  text-align: center;
}
.login-column-left {
  margin-top: 6rem !important;
  width: 30rem !important;
}

.login-title {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
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
</style>
