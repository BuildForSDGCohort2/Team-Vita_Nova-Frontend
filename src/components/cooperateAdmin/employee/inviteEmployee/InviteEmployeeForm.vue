<template>
  <v-container>
    <v-row>
      <v-card-title class="invite-title">
        <h3>Invite your Employees</h3>
      </v-card-title>
    </v-row>
    <v-card class="invite-card ma-auto">
      <v-card-text>
        <ValidationObserver v-slot="{ handleSubmit }">
          <v-form
            class="invite-form"
            v-if="!submitted"
            @submit.prevent="handleSubmit(inviteEmployee)"
          >
            <div v-if="errorMsg">
              <span class="err text-xl-center">{{errorMsg}}</span>
            </div>
            <Loader :loading="loading" :message="message" />
            <FileUploadPage />

            <h3 class="inviteOr">OR</h3>

            <p class="inviteManually">Manually input Employees Email</p>
            <v-row>
              <v-col cols="9">
                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                  <v-text-field
                    v-model="email"
                    label="Email Address"
                    outlined
                    name="emailAddress"
                    color="red"
                    chips
                  ></v-text-field>
                  <!--                    <v-icon @click="onAddButton" class="ml-lg-3">mdi-plus</v-icon>-->
                  <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
              <v-col cols="3" style="padding-left: 10px">
                <v-btn
                  style="
                  height: 55px;
                  background: #FF2E2E;
                  color: #ffffff;
                  border: 0.736458px solid rgba(150, 12, 12, 0.5);
                  box-sizing: border-box;
                  border-radius: 5.89167px;"
                  @click="addEmail"
                >+ADD</v-btn>
              </v-col>
            </v-row>
            <SubmitButton button-name="Send Invite" />
          </v-form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import SubmitButton from "../../../ui/buttons/SubmitButton";
import UserService from "../../../../services/user-services";
import FileUploadPage from "./FileUploadPage";
import Loader from "../../../ui/loader/Loader";
export default {
  name: "InviteEmployeeForm",
  mounted() {
    console.log("we are live");
  },
  components: {
    FileUploadPage,
    SubmitButton,
    Loader
  },
  data() {
    return {
      emails: "",

      submitted: false,
      loading: false,
      errorMsg: "",
      message: ".",
      value: true
    };
  },
  methods: {
    addEmail() {
    },
    inviteEmployee() {
      const data = {emails: ["john@semicolon.africa"]};

      UserService.inviteEmployee(data)
          .then(
              res => {
                console.log(res.data);
                this.$router.push("../../../splashPages/EmployeeInviteSent");
                this.submitted = true;
              },
              error => {
                this.loading = false;
                this.errorMsg = error.response.data.detail;
              }
          )
    }
  }
}
</script>

<style scoped>
.invite-form {
  margin-right: 12%;
  margin-left: 12%;
}
.invite-card {
  width: 707px;
  height: 802px;
  width: 540px;
  padding-top: 15px;
  border: 1.47292px solid #f8f8f8;
  box-sizing: border-box;
  box-shadow: 0px 1.47292px 2.94583px rgba(43, 28, 28, 0.15);
  border-radius: 14.7292px;
}
.err {
  display: block;
  color: red;
  font-size: 11px;
}
.invite-title {
  padding-left: 35%;
  padding-top: 7%;
  padding-bottom: 3%;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 40px;
  text-align: center;
  color: #2b1c1c;
}
.v-text-field--outlined .v-input__slot ::before {
  border: 1px solid red !important;
  min-height: 50px !important;
}
@media only screen and (max-width: 600px) {
  .invite-form {
    flex-direction: row !important;
    margin: auto;
  }
  .invite-title {
    margin-left: 10%;
    padding-left: 0px;
    width: 100%;
  }
}
.v-text-field .v-input__slot::before {
  border-color: red !important;
}
.v-application--is-ltr .v-text-field .v-label--active {
  color: red !important;
}
.inviteManually {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  padding-bottom: 2em;
  align-items: center;
  letter-spacing: 0.05em;
  color: #2b1c1c;
}
.inviteOr {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  line-height: 23px;
  letter-spacing: 0.05em;
  margin-bottom: 48px;
  color: rgba(43, 28, 28, 0.4);
}
.inviteSkip {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  justify-content: center;
  /* semicolon-red-primary */
  color: #ff2e2e;
}
</style>