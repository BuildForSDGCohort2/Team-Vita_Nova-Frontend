<template>
  <v-responsive class="component-container">
    <v-container grid-list-md>
      <v-row class="align-center justify-center">
        <v-col cols="12" md="8" sm="6">
          <template>
            <v-card
                class="card pa-2"
                max-width="844"
                height="700"
                :style="{'background-color': '#E4F0D4', 'background-size': 'cover'}"
            >
              <v-row class="row-input mt-8">
                <v-col cols="12" md="8" sm="6">
                  <h1>Create your account</h1>
                  <ValidationObserver v-slot="{ handleSubmit }">
                    <v-form v-if="!submitted" @submit.prevent="handleSubmit(handleRegister)">
                      <div v-if="errorMsg">
                        <span class="err text-xl-center">{{errorMsg}}</span>
                      </div>
                      <Loader :loading="loading" :message="message" />
                      <ValidationProvider name=" First Name" rules="required|alpha" v-slot="{ errors }">
                        <span v-show="errors" class="err">{{ errors[0] }}</span>
                        <v-text-field
                            height="20"
                            label="First Name"
                            outlined
                            name="firstName"
                            v-model="user.first_name"
                            color="red"
                        ></v-text-field>
                      </ValidationProvider>
                      <ValidationProvider name="Last Name" rules="required|alpha" v-slot="{ errors }">
                        <span v-show="errors" class="err">{{ errors[0] }}</span>
                        <v-text-field
                            label="Last Name"
                            name="lastName"
                            outlined
                            v-model="user.last_name"
                            color="red"
                        ></v-text-field>
                      </ValidationProvider>
                      <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                        <span v-show="errors" class="err">{{ errors[0] }}</span>
                        <v-text-field
                            label="Email Address"
                            name="emailAddress"
                            v-model="user.email"
                            outlined
                            color="red"
                        ></v-text-field>
                      </ValidationProvider>
                      <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
                        <span v-show="errors" class="err">{{ errors[0] }}</span>
                        <v-text-field
                            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="() => (value = !value)"
                            :type="value ? 'password' : 'text'"
                            label="Password"
                            name="password"
                            v-model="user.password"
                            outlined
                            color="red"
                        ></v-text-field>
                      </ValidationProvider>

                      <v-row class="d-flex TC ml-1">
                        <p class="mr-1 mb-0">By creating an account, you agree to our</p>

                        <p class="mr-1 mb-0 tc-text">Master Service Statement</p>

                        <p class="mr-1 mb-0">and</p>

                        <p class="tc-text mb-0">Privacy Policy.</p>
                      </v-row>

                      <SubmitButton button-name="Create Account" />
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
import {localize} from "vee-validate";

export default {
  name: "RegisterPage",
  components: {
    Loader,
    SubmitButton
  },
  data() {
    localize({
      en: {
        messages: {
          // generic rule messages...
        },
        fields: {
          password: {
            required: "Password cannot be empty!",
            min: "Password must contain digit, alphabet and underscore?"
          }
        }
      }
    });
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      },
      submitted: false,
      loading: false,
      message: ".",
      errorMsg: "",
      value: true
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.onboarding.status.loggedIn;
    },
  },
  methods: {
    handleRegister() {
      this.loading = true;
      console.log(this.user);
      this.$store.dispatch("onboarding/userRegister", this.user).then(
          data => {
            console.log(data);
            this.$router.push("/success");
          },
          error => {
            this.loading = false;
            console.log(error);
            this.errorMsg = error.response.data.detail;
          }
      );
    }
  }
};
</script>

<style scoped>
.TC {
  font-size: 12px !important  ;
}
.tc-text {
  color: red !important;
  cursor: pointer;
}
.err {
  display: block;
  color: red;
  font-size: 13px;
  margin-bottom: 5px;
}
.component-container {
  background-color: #E4F0D4;
}
.row-input {
  justify-content: center;
}

</style>