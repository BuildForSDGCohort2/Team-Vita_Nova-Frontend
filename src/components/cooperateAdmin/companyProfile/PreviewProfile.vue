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
          <v-btn to="/cooperate/update-profile" class="edit-button red white--text mr-sm-10"
            >Edit Profile</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" md="1com2">
        <v-card class="card-header">
          <v-row>
            <v-col cols="6" md="6">
              <v-card flat class="logo-card">
                <v-img  :src=company_logo
                  aspect-ratio="1.7"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card flat>
                <v-card-title class="name-card mr-sm-1">
                <p>{{ company_name}}</p></v-card-title>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-card flat>
                <v-card-title class="font-label "
                  >BUSINESS INDUSTRY</v-card-title>

                <v-card-text class="font-data"  v-for="business in business_industries" :key="business.business_industries">
                  <p v-if="business.length === null ">N/A</p>
                    <p v-else-if="business === '' " >N/A</p>
                  <p v-else class="pb-0 pt-0">{{business }}</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card flat>
                <v-card-title class="font-label">COMPANY WEBSITE</v-card-title>
                <v-card-text class="font-data">
                 <p> {{website
                }}</p></v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-card flat>
                <v-card-title class="font-label">YEARLY TRAINING BUDGET</v-card-title
                >
               <v-card-text class="font-data">
                 <p>{{ yearly_training_budget }}</p></v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card flat>
                <v-card-title class="font-label"
                  >NUMBER OF EMPLOYEES</v-card-title>
                <v-card-text class="font-data">
                  <p >{{number_of_employees }}</p></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


import PreviewProfile from "../../../views/cooperateAdmin/PreviewProfile";
import UserService from "../../../services/user-services";

export default {
  props: {
      title:PreviewProfile,
  },
  data() {
    return {
      company_logo: "",
      company_name: "",
      business_industries: [],
      website: "N/A",
      yearly_training_budget: "N/A",
      number_of_employees: "N/A"
    };
  },
 methods:{
   getProfile(){
     UserService.getProfile()
             .then(res =>{
               console.log(res)
               this.company_logo = res.data.company_logo
               this.company_name = res.data.company_name;
               this.business_industries = res.data.business_industries
               this.website = res.data.website
               this.yearly_training_budget = res.data.yearly_training_budget
               this.number_of_employees = res.data.number_of_employees

             })
   }
},
  created() {
    this.getProfile()
  }
};
</script>

<style scoped>
    .header {
  width: 20rem;
  height: auto;
  margin-top: 2rem;
  margin-left: 1rem;
  font-family: IBM Plex Sans;
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
  margin-left: 40%;
  margin-top: 1rem;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
}
.font-label {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  margin-left: 5rem;
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 10px!important;
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
    .v-card__subtitle, .v-card__text, .v-card__title{
      padding: 0px !important;
    }
</style>
