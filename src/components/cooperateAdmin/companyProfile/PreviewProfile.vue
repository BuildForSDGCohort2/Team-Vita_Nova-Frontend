<template>
  <v-container>
    <v-row no-gutters class="px-8">
      <v-col cols="12" md="6">
        <div class="header">
          <h3>Company Profile</h3>
          <p class="pa-1">Add your company information</p>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div depressed class="header-button">
          <v-btn to="/cooperate/update-profile" class="edit-button red white--text mr-sm-10" @click="submit()"
            >Edit Profile</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" md="1com2">
        <v-card class="card-header">
          <v-row>
            <v-col cols="6" md="6">
              <v-card flat class="logo-card">
                <v-img src="../../../../src/assets/sterling.svg"
                  aspect-ratio="1.7"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card flat>
                <v-card-title class="name-card">{{ company }}</v-card-title>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-card flat>
                <v-card-title class="font-lable"
                  >BUSINESS INDUSTRY</v-card-title>

                <v-card-text class="font-data">{{
                  businessIndustry
                }}</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card flat>
                <v-card-title class="font-lable">COMPANY WEBSITE</v-card-title>
                <v-card-text class="font-data">{{
                  companyWebsite
                }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-card flat>
                <v-card-title class="font-lable"
                  >YEARLY TRAINING BUDGET</v-card-title
                >
               <v-card-text class="font-data">{{ budget }}</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card flat>
                <v-card-title class="font-lable"
                  >NUMBER OF EMPLOYEES</v-card-title
                >
                <v-card-text class="font-data">{{
                  numberOfEmployees
                }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
  // props: {
  //     event: Object
  // },
  data() {
    return {
        img: "/src/assets/sterling.svg",
        company: "Sterling Bank Plc",
        businessIndustry: "Banking and Finance",
        companyWebsite: "sterlingbank.com",
        budget: "N/A",
        numberOfEmployees: "12"
    };
  },
  methods: {
    submit() {
      this.$emit("lalala");
    },

  }
};
</script>

<style scoped>
.header1 {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  /* identical to box height */

  display: flex;
  align-items: center;
}
.header {
  width: 20rem;
  height: auto;
  margin-top: 2rem;
  margin-left: 1rem;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
}
.header-button {
  margin-top: 2rem;
  text-align: right;
  margin-right: 19rem;
}
.card-header {
  max-width: 46rem;
  margin-left: 1rem;
  color: blue;
  margin-top: 1rem;
  height: auto;
}
.edit-button {
  margin-right: 10rem;
  background-color: red;
}
.logo-card {
  margin-left: 82%;
  margin-top: 1rem;
  width: 10rem;
}
.name-card {
  margin-left: 37%;
  margin-top: 1rem;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
}
.font-lable {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  margin-left: 5rem;
  color: rgba(0, 0, 0, 0.3);
}
.font-data {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #2b1c1c;
  margin-left: 5rem;
}
@media only screen and (max-width: 600px) {
}
</style>
