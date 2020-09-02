<template>
  <v-row>
    <v-col md="6">
      <v-card class="px-12 mx-auto mt-10" flat width="600">
        <h1>Create your account</h1>
        <ValidationObserver v-slot="{ handleSubmit }">
          <v-form v-if="!submitted" @submit.prevent="handleSubmit(handleRegister)">
            <div v-if="errorMsg">
              <span class="err text-xl-center">{{errorMsg}}</span>
            </div>
            <Loader :loading="loading" :message="message" />
            <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
              <span v-show="errors" class="err">{{ errors[0] }}</span>
              <v-row style="height:60%">
                <v-col md="6">
                  <v-text-field
                    height="20"
                    label="First Name"
                    outlined
                    name="firstName"
                    v-model="user.first_name"
                    color="red"
                  ></v-text-field>
                </v-col>
                <v-col md="6">
                  <v-text-field
                    label="Last Name"
                    name="lastName"
                    outlined
                    v-model="user.last_name"
                    color="red"
                  ></v-text-field>
                </v-col>
              </v-row>
            </ValidationProvider>
            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
              <v-text-field
                label="Email Address"
                name="emailAddress"
                v-model="user.email"
                outlined
                color="red"
              ></v-text-field>
              <span v-show="errors" class="err">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
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
              <span v-show="errors" class="err">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider name="Company Name" rules="required" v-slot="{ errors }">
              <v-text-field
                label="Company Name "
                outlined
                name="companyName"
                v-model="user.company_name"
                color="red"
              ></v-text-field>
              <span v-show="errors" class="err">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider name="Job Role" rules="required" v-slot="{ errors }">
              <v-combobox
                append-icon="mdi-chevron-down"
                :items="jobRolesSelect"
                label="Job Role "
                name="jobRole"
                v-model="user.role"
                outlined
                color="red"
              ></v-combobox>
              <span class="err">{{ errors[0] }}</span>
            </ValidationProvider>

            <v-text-field
              label="Company Website "
              outlined
              name="website"
              v-model="user.website"
              color="red"
            ></v-text-field>

            <v-row class="d-flex TC ml-1">
              <p class="mr-1 mb-0">By creating an account, you agree to our</p>

              <p class="mr-1 mb-0 tc-text">Master Service Statement</p>

              <p class="mr-1 mb-0">and</p>

              <p class="tc-text mb-0">Privacy Policy.</p>
            </v-row>

            <!--                        <v-btn color="green" :disabled="invalid" >Submit</v-btn>-->
            <SubmitButton button-name="Create Account" />
          </v-form>
        </ValidationObserver>
      </v-card>
    </v-col>

    <v-col class="d-none d-md-flex login-coloumn" cols="6">
      <div>
        <v-img src="../../assets/door-entrance-illo.svg" width="400"></v-img>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import SubmitButton from "../ui/buttons/SubmitButton";
import Loader from "../ui/loader/Loader";
import { localize } from "vee-validate";
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
            min: "Password must contain digit,alphabet and underscore?"
            // min: 'Too few, you want to get doxed?'
          }
        }
      }
    });
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        company_name: "",
        website: "",
        role: "",
        corporate: true,
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
    jobRolesSelect() {
      return ["Human Resource", "CEO", "MD", "CTO", "OTHER"];
    }
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
          // this.message =
          //     (error.response && error.response.data) ||
          //     error.message ||
          //     error.toString();
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

.login-coloumn {
  background-color: #fff0ce;
}

</style>