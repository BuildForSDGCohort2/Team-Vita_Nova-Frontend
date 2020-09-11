<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <h3 class="title-header">Edit Company Profile</h3>
        <p class="card-title mt-5">Change Company Logo</p>
        <v-card class="logo-card">
          <v-row>
            <v-col cols="12" md="6">
              <v-img
                class="ml-6 "
                :src="logo"
                width="8rem"
                height="6rem"
              ></v-img>
            </v-col>

            <v-col cols="12" md="6">
              <div class="color-title">Upload your brand logo</div>
              <v-btn
                class="ml-16 #F8F8F8 black--text"
                @click="$refs.fileInput.click()"
              >
                upload your files
              </v-btn>
              <input
                ref="fileInput"
                style="display: none"
                type="file"
                @change="handleImage"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <p class="card-title mt-8">Primary Color</p>
        <v-card class="logo-card">
          <v-row>
            <v-col cols="12" md="6">
              <div class="mt-4 ml-5">Choose a primary color</div>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                tile
                color="#960C0C"
                class="drop-down-button"
                @click.stop="color = !color"
                width="300"
                height="50"
              >
                <v-icon color="white">mdi-pencil</v-icon>
              </v-btn>

              <v-color-picker
                v-model="picker"
                elevation="10"
                v-show="color"
                class=""
              ></v-color-picker>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <p class="card-title mr-16 mt-8">Edit company information</p>
        <v-card class="profile-card pa-10">
          <ValidationObserver v-slot="{ handleSubmit }">

            <form v-if="!submitted" @submit.prevent="handleSubmit(onSubmit)">
          <v-row>
            <v-col cols="12" md="12" class="ma-auto ">


              <Loader :loading="loading" :message="message" />
              <v-text-field
                label="Company Name"
                outlined
                color="red"
                class="text-field ma-auto"
                readonly
                v-model="event.company_name"
              ></v-text-field>

              <v-text-field
                label="Website"
                outlined
                color="red"
                class="text-field ma-auto"
                readonly
                v-model="event.website"
              ></v-text-field>

              <v-text-field
                label="No of Employees(Optional)"
                outlined
                name="noOfEmployees"
                v-model="noOfEmployees"
                color="red"
                class="text-field ma-auto"
                data-testid="input-employee"
              ></v-text-field>

              <v-text-field
                label="Yearly Training Budget(Optional)"
                outlined
                name="yearlyTrainingBudget"
                v-model="Yearly_Training_Budget"
                color="red"
                class="text-field ma-auto"
              ></v-text-field>

                  <ValidationProvider name="Business Industry" rules="required" v-slot="{ errors }">
              <v-combobox
                :items="businessIndustries"
                label="Business Industry"
                hint="Industry not included?add and press enter"
                multiple
                persistent-hint
                chips
                outlined
                v-model="selectBusinessIndustry"
                color="red"
                class="text-field ma-auto"

              >
                <template v-slot:selection="data">
                  <v-chip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    :disabled="data.disabled"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <v-avatar
                      class="accent white--text"
                      left
                      v-text="data.item.slice(0, 1).toUpperCase()"
                    ></v-avatar>
                    {{ data.item }}
                  </v-chip>
                </template>
              </v-combobox>
                    <span class="error-msg">{{ errors[0] }}</span>
                  </ValidationProvider>

            </v-col>
          </v-row>
          <v-responsive class="float-right mr-md-16">
            <v-btn
              data-testid="submit-button"
              class="update red white--text mr-md-7"
              type="submit"
              >Update</v-btn>
          </v-responsive>
            </form>
          </ValidationObserver>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserService from "../../../services/user-services";
import Loader from "../../ui/loader/Loader";

export default {
  name: "UpdateProfile",
  components:{
    Loader
  },

  data() {
    return {
      event:{
        company_name:"",
        website:""
      },
      files: [],
      color: false,
      picker: { hex: " " },
      logo: "",
      selectBusinessIndustry: [],
      noOfEmployees: "",
      Yearly_Training_Budget: "",
      loading: false,
      message: ".",
      value: true,
      submitted:false,
      errorMsg:''
    };
  },
  methods: {
    handleImage(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.logo = reader.result;
      };
      reader.readAsDataURL(file);
    },

    getProfile(){
      UserService.getProfile()
              .then(res => {
                console.log(res)
                this.event.company_name = res.data.company_name;
                this.event.website = res.data.website;
              })

    },

    onSubmit() {
      this.loading = true;
      const profile = {
          number_of_employees: this.noOfEmployees,
          yearly_training_budget: this.Yearly_Training_Budget,
          business_industries: this.selectBusinessIndustry,
          company_logo: this.logo,
          primary_color: this.picker.hex
        };
        UserService.Profile(profile).then(
                profile => {
                  console.log(profile.data);
                  alert('Form has been submitted!');
                  this.$router.push("/corporate/preview-profile");
                },
                error => {
                  this.loading = false;
                  alert('Failed to update form please check required fields or network!');
                  console.log(error);
                  this.errorMsg = error.response.profile.detail;
                })

    },
  },
  created() {
    this.getProfile()
  },
  computed: {
    businessIndustries() {
      return [
        "Accounting & Finance",

        "Human Resources Management  and Administration",

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
    }
  }
};
</script>

<style scoped>
.title-header {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 42px;
  display: flex;
  align-items: center;
  margin-left: 5rem;
  color: #2b1c1c;
}
.card-title {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  margin-left: 5rem;
  color: #645262;
}
.logo-card {
  margin-top: 1rem;
  width: 45.3rem;
  height: auto;
  margin-left: 5rem;
}
.color-title {
  margin-left: 4rem;
  margin-top: 1em;
}
.profile-card {
  margin-top: 1rem;
  width: 45.3rem;
  height: auto;
  margin-left: 5rem;
}
.text-field {
  width: 25rem;
}
  .error-msg{
    display: block;
    color: red;
    font-size: 13px;
    margin-left: 6rem;
  }



</style>
