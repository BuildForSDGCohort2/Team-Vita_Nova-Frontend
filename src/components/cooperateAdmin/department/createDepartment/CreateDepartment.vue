<template>
  <v-container>
    <v-row no-gutters class="Dept-title">
      <v-col>
        <h3>Create Department</h3>
        <p class="create-para">Create multiple department and add employees</p>
      </v-col>
    </v-row>

    <v-card class="Dept-card ma-auto">
      <v-card-text>
        <v-form class="create-form" v-if="!submitted" @submit.prevent="handleCreateDepartment">
          <Loader :loading="loading" :message="message" />
          <v-combobox
            append-icon="mdi-chevron-down"
            :items="company"
            label="Company"
            outlined
            name="company"
            v-model="formData.company"
            color="red"
          ></v-combobox>
          <v-combobox
            append-icon="mdi-chevron-down"
            :items="departmentNameSelect"
            label="Department Name "
            name="departmentName"
            v-model="formData.department_name"
            outlined
            color="red"
            required
          ></v-combobox>
          <v-combobox
            append-icon="mdi-chevron-down"
            :items="numberOfEmployee"
            label="Number Of Employee"
            name="numberOfEmployee"
            v-model="formData.num_of_employees"
            outlined
            color="red"
          ></v-combobox>
          <v-combobox
            append-icon="mdi-chevron-down"
            label="Department Lead "
            outlined
            name="departmentLead"
            v-model="formData.department_lead"
            color="red"
          ></v-combobox>

          <v-text-field
            multiple
            chips
            append-icon="mdi-chevron-down"
            label="Department Goal"
            outlined
            class="goal"
            name="departmentGoal"
            v-model="formData.department_goal"
            color="red"
          ></v-text-field>
          <SubmitButton button-name="+ Add Another Department" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import SubmitButton from "../../../ui/buttons/SubmitButton";
import UserService from "../../../../services/user-services";
import Loader from "../../../ui/loader/Loader";

export default {
  name: "CreateDepartment",
  components: {
    SubmitButton,
    Loader
  },
  data() {
    return {
      formData: {
        company: "",
        department_name: "",
        num_of_employees: "",
        department_lead: "",
        department_goal: []
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
    company() {
      return ["Semicolon Africa"];
    },
    departmentNameSelect() {
      return [
        "Accounting & Finance",
        "Human Resources Management and Administration",
        "Technology",
        "Marketing & Communications",
        "Outsourcing",
        "Legals",
        "Logistics",
        "Production",
        "Research and Development (often abbreviated to R&D)",
        "Purchasing",
        "Marketing (including the selling function)",
        "Others"
      ];
    },
    numberOfEmployee() {
      return ["5", "7", "10"];
    }
  },

  methods: {
    handleCreateDepartment() {
      this.loading = true;
      const data = this.formData;
      // if(this.user.email && this.user.password){
      //     this.$store.dispatch('auth/login', this.user)
      console.log("in the method", data);

      UserService.handleCreateDepartment(data)
        .then(
          res => {
            console.log(res.data);
            this.$router.push("/dashboard");
          },
          error => {
            this.loading = false;
            this.errorMsg = error.response.data.detail;
          }
        )
        .catch(err => {
          console.log(err.res.data);
        });
      console.log("we are done");
    }
  }
};
</script>

<style scoped>
.Dept-card {
  width: 550px;
  padding-top: 50px;
}
.create-form {
  margin-right: 15%;
  margin-left: 15%;
}
.create-para {
  font-size: 14px;
  /*margin-left: -54px;*/
}
.goal {
  height: 168px;
}
.Dept-title {
  font-family: IBM Plex Sans !important;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 50px;
  /*text-align: center !important;*/
  align-items: center;
  color: #2b1c1c;
  margin-left: 30%;
  margin-bottom: 30px;
}

.err {
  display: block;
  color: red;
  font-size: 11px;
}

@media only screen and (max-width: 600px) {
  .create-form {
    margin-left: 7%;
    margin-right: 7%;
  }
  .Dept-title {
    font-family: IBM Plex Sans !important;
    font-style: normal;
    /*font-weight: 500;*/
    font-size: 20px;
    line-height: 50px;
    color: #2b1c1c;
    margin-bottom: 20px;
  }
}
</style>