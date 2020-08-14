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
                :src="profile.logo"
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
              <!--              <template>-->
              <!--                <v-file-input-->
              <!--                  v-model="files"-->
              <!--                  placeholder="choose from file..."-->
              <!--                  filled-->
              <!--                  flat-->
              <!--                  outlined-->
              <!--                  prepend-icon=""-->
              <!--                  dense-->
              <!--                  class="input-field"-->
              <!--                >-->
              <!--                  <template v-slot:selection="{ text }">-->
              <!--                    <v-chip small label color="primary">-->
              <!--                      {{ text }}-->
              <!--                    </v-chip>-->
              <!--                  </template>-->
              <!--                </v-file-input>-->
              <!--              </template>-->
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
        <v-card class="profile-card pa-16">
          <v-row>
            <v-col cols="12" md="12" class="ma-auto ">
<!--              <form-->
<!--                v-if="!submitted"-->
<!--                @submit.prevent="handleSubmit(handleRegister)"-->
<!--              >-->
                <v-text-field
                  label="Company Name"
                  outlined
                  name="companyName"
                  v-model="companyName"
                  color="red"
                  class="text-field ma-auto"
                ></v-text-field>

                <v-text-field
                  label="Website"
                  outlined
                  name="website"
                  v-model="website"
                  color="red"
                  class="text-field ma-auto"
                ></v-text-field>

                <v-text-field
                  append-icon="mdi-chevron-down"
                  label="No of Employees(Optional)"
                  outlined
                  name="noOfEmployees"
                  v-model="noOfEmployees"
                  color="red"
                  class="text-field ma-auto"
                ></v-text-field>

                <v-text-field
                  append-icon="mdi-chevron-down"
                  label="Yearly Training Budget(Optional)"
                  outlined
                  name="yearlyTrainingBudget"
                  v-model="Yearly_Training_Budget"
                  color="red"
                  class="text-field ma-auto"
                ></v-text-field>

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
<!--              </form>-->
            </v-col>
          </v-row>
          <v-responsive class="float-right mr-md-16">
            <v-btn data-testid="submit-button" class="update red white--text mr-md-7" @click="submit"
              >Update</v-btn
            >
          </v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import UserService from "../../../services/user-services";

export default {
  name: "UpdateProfile",
  data() {
    return {
      profile: {
        logo:"",
        companyName: "",
        website: "",
        selectBusinessIndustry: [],
        noOfEmployees: "",
        Yearly_Training_Budget: ""
      }
    };
  },
  methods: {
    handleImage(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.profile.logo = reader.result;
      };
      reader.readAsDataURL(file);
    },
    handleCreateCourse() {
      console.log(this.course);
    },
    submit(){
      this.$emit('formSubmitted', { name: this.name })
    }
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
</style>
