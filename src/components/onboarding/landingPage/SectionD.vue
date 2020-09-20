<template>
  <v-responsive class="component-container">
    <v-container grid-list-md>
      <div>
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col>
                <h1 class="ml-15" style="color:#F56C08">You can Contact Us</h1>
              </v-col>
            </v-row>
            <v-row  class="align-center justify-center">
              <v-col cols="12" md="10" sm="8">
                <template>
                  <v-card
                      class="card pa-1"
                      max-width="844"
                      height="650"
                      outlined
                      :style="{'background-color': 'rgba(196, 196, 196, 0.27)', 'background-size': 'cover'}"
                  >
                    <ValidationObserver v-slot="{ handleSubmit }">
                      <v-form
                          class="contact-us-form"
                          v-if="!submitted"
                          @submit.prevent="handleSubmit(handleContactUs)">
                        <div v-if="errorMsg">
                          <span class="err text-xl-center">{{ errorMsg }}</span>
                        </div>
                        <Loader :loading="loading" :message="message" />
                        <v-row class="row-input mt-n5">
                          <v-col cols="12" md="8">
                            <ValidationProvider
                                name="First Name"
                                rules="required"
                                v-slot="{ errors }"
                            >
                              <span class="err mt-10 mb-3">{{ errors[0] }}</span>
                              <v-text-field
                                  v-model="feedback.firstName"
                                  class="first-name mt-3"
                                  label="First Name"
                                  outlined
                                  color="rgba(0, 0, 0, 0.71)"
                                  name="firstName"
                                  chips
                                  clearable
                                  multiple
                              ></v-text-field>
                            </ValidationProvider>
                          </v-col>
                        </v-row>
                        <v-row class="row-input mt-n10">
                          <v-col cols="12" md="8">
                            <ValidationProvider
                                name="Last Name"
                                rules="required"
                                v-slot="{ errors }"
                            >
                              <span class="err mb-2">{{ errors[0] }}</span>
                              <v-text-field
                                  v-model="feedback.lastName"
                                  class="last"
                                  label="Last Name"
                                  outlined
                                  color="rgba(0, 0, 0, 0.71)"
                                  name="lastName"
                                  chips
                                  clearable
                                  multiple
                              ></v-text-field>
                            </ValidationProvider>
                          </v-col>
                        </v-row>
                        <v-row class="row-input mt-n10">
                          <v-col cols="12" md="8">
                            <ValidationProvider
                                name="E-mail Address"
                                rules="required"
                                v-slot="{ errors }"
                            >
                              <span class="err mb-2">{{ errors[0] }}</span>
                              <v-text-field
                                  v-model="feedback.email"
                                  class="email-address"
                                  label="E-mail Address"
                                  outlined
                                  color="rgba(0, 0, 0, 0.71)"
                                  name="emailAddress"
                                  chips
                                  clearable
                                  multiple
                              ></v-text-field>
                            </ValidationProvider>
                          </v-col>
                        </v-row>
                        <v-row class="row-input mt-n4">
                          <v-col cols="12" md="8">
                            <ValidationProvider
                                name="Message"
                                rules="required|max:1000"
                                v-slot="{ errors }"
                            >
                              <span class="err mt-n5 mb-2">{{ errors[0] }}</span>
                              <v-textarea
                                  v-model="feedback.message"
                                  outlined
                                  name="message"
                                  label="Message"
                                  class="inquire-n5"
                                  color="rgba(0, 0, 0, 0.71)"
                              ></v-textarea>
                            </ValidationProvider>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" md="2" class="ma-auto" >
                          </v-col>
                          <v-col cols="12" md="3" class="ma-auto mt-n6" >
                            <SubmitButton button-name="Submit" />
                          </v-col>
                          <v-col cols="12" md="7" class="ma-auto" >
                          </v-col>
                        </v-row>
                      </v-form>
                    </ValidationObserver>
                  </v-card>
                </template>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" md="6">
                <h1 class="ml-15" style="color:#F56C08">FAQs</h1>
              </v-col>
            </v-row>
            <v-row  class="align-center justify-center">
              <v-col cols="12" md="10" sm="8">
                <template>
                  <v-card
                      class="card"
                      max-width="844"
                      height="650"
                      outlined
                      :style="{'background-color': 'rgba(196, 196, 196, 0.27)', 'background-size': 'cover'}"
                  >
                  </v-card>
                </template>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-responsive>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Loader from "@/components/ui/loader/Loader";
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import UserService from "@/services/user-services";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: "CreateCourse",
  components: {
    Loader,
    VueEditor,
    SubmitButton,
    ValidationProvider,
    ValidationObserver
  },
  props: {
  },
  data: function () {
    return {
      en: {
        messages: {}
      },
      feedback: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },

      submitted: false,
      errorMsg: "",
      message: ".",
      loading: false,
    };
  },
  computed: {

  },
  methods: {
    handleContactUs() {
      this.loading = true;
      let feedback = {
        "first_name": this.feedback.firstName,
        "last_name": this.feedback.lastName,
        "email": this.feedback.email,
        "message": this.feedback.message,
      };
      UserService.handleContactUs(feedback).then(
          res => {
            console.log(res.data);
            this.$router.push({ path: '/dashboard' });
          },
          error => {
            this.loading = false;
            console.log(error.response);
            this.errorMsg = error.response.data.detail;
          }
      );
    }
  },
};
</script>

<style>
.component-container {
  background-color: #E4F0D4;
}
.links {
  /* View All */
  font-weight: normal;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: right;
}
.card {
  background: rgba(196, 196, 196, 0.27);;
  border: 2px solid #F8F8F8;
  box-sizing: border-box;
  box-shadow: 0 2px 3px rgba(43, 28, 28, 0.15);
  border-radius: 15px 15px 0 0;
}
.err {
  display: block;
  color: #F56C08;
  font-size: 11px;
}
.row-input {
  justify-content: center;
}
</style>