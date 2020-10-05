<template>
  <v-responsive class="component-container">
    <v-container grid-list-xl>
      <div :style="{'font-family': 'IBM Plex Sans'}">
        <v-row class="d-flex mx-5">
          <div class="headline ml-0 mt-8">
            <h1
                :style="{'font-family': 'IBM Plex Sans', 'font-size': '38px', 'line-height': '56px'}"
            >Distributor Order</h1>
          </div>
        </v-row>
        <v-row  class="align-center justify-center">
          <v-col cols="12" md="12" sm="8">
            <template>
              <v-card
                  class="card mx-auto pa-6"
                  max-width="1000"
                  outlined
              >
                <ValidationObserver v-slot="{ handleSubmit }">
                  <v-form
                      class="course-form"
                      v-if="!submitted"
                      @submit.prevent="handleSubmit(handleCreateDistributorRequest)">
                    <div v-if="errorMsg">
                      <span class="err text-xl-center">{{ errorMsg }}</span>
                    </div>
                    <Loader :loading="loading" :message="message" />
                    <v-row class="solution mt-6">
                      <v-col cols="12"  md="5" sm="8" :loading="loading">
                        <v-row class="mt-5 row-input">
                          <v-col cols="12" md="12" class="ma-auto">
                            <v-switch
                                inset
                                v-model="request.active_distributor"
                                label="Active Distributor"
                                color="green"
                                :value=request.active_distributor
                                hide-details
                            ></v-switch>
                          </v-col>
                        </v-row>
                        <v-row class="row-input">
                          <v-col cols="12" md="12">
                            <ValidationProvider
                                name="Departure location"
                                rules="required"
                                v-slot="{ errors }"
                            >
                              <span class="err mt-2 mb-2">{{ errors[0] }}</span>
                              <v-text-field
                                  v-model="request.departure"
                                  class="course-name mt-3"
                                  label="Departure location"
                                  outlined
                                  color="#F56C08"
                                  name="DepartureLoc"
                                  chips
                                  clearable
                                  multiple
                              ></v-text-field>
                            </ValidationProvider>
                          </v-col>
                        </v-row>
                        <v-row class="row-input mt-n10">
                          <v-col cols="12" md="12">
                            <ValidationProvider
                                name="Destination"
                                rules="required"
                                v-slot="{ errors }"
                            >
                              <span class="err mt-2 mb-2">{{ errors[0] }}</span>
                              <v-text-field
                                  v-model="request.destination"
                                  class="course-name mt-3"
                                  label="Destination"
                                  outlined
                                  color="#F56C08"
                                  name="orderDest"
                                  chips
                                  clearable
                                  multiple
                              ></v-text-field>
                            </ValidationProvider>
                          </v-col>
                        </v-row>
                        <v-row class="row-input mt-n10">
                          <v-col cols="12" md="12">
                            <v-text-field
                                v-model="request.purpose_of_travel"
                                class="course-name mt-3"
                                label="Purpose of Travel"
                                outlined
                                color="#F56C08"
                                name="purposeOfTravel"
                                chips
                                clearable
                                multiple
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="row-input mt-n10">
                          <v-col cols="12" md="12">
                            <ValidationProvider
                                name="Active Contact Number"
                                rules="required"
                                v-slot="{ errors }"
                            >
                              <span class="err mt-2 mb-2">{{ errors[0] }}</span>
                              <v-text-field
                                  v-model="request.active_contact_number"
                                  class="course-name mt-3"
                                  label="Active Contact Number"
                                  outlined
                                  color="#F56C08"
                                  name="activeContact"
                                  chips
                                  clearable
                                  multiple
                              ></v-text-field>
                            </ValidationProvider>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col class="mt-lg-14" cols="12"  md="5" sm="8" :loading="loading">
                        <v-row class="row-input mt-lg-16 mt-md-16 mt-sm-n16">
                          <v-col cols="12" md="12">
                            <v-combobox
                                v-model="request.mode_of_travel"
                                :items="modeOfTravel"
                                name="Mode of Travel"
                                label="Mode of Travel"
                                :multiple=false
                                outlined
                                clearable
                                class="course-cat mt-n5"
                                color="#F56C08"
                                persistent-hint
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
                          </v-col>
                        </v-row>
                        <v-row class="row-input">
                          <v-col cols="12" md="12">
                            <v-menu
                                v-model="dateMenu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                :nudge-right="40"
                                offset-y
                                max-width="290px"
                                min-width="250"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-on="on"
                                    append-icon="mdi-calendar"
                                    label="Travel Schedule"
                                    readonly
                                    outlined
                                    :value="dateDisplay"
                                    class="mt-n5"
                                    color="#F56C08"
                                    v-bind="attrs"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                  v-model="request.travel_schedule"
                                  locale="en-in"
                                  no-title
                                  @input="dateMenu = false"
                                  :min="minDate"
                              >
                              </v-date-picker>
                            </v-menu>
                          </v-col>
                        </v-row>
                        <v-row class="row-input">
                          <v-col cols="12" md="12">
                            <v-menu
                                ref="menu"
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="request.time"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="request.time"
                                    label="Time of Travel"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    color="#F56C08"
                                    append-icon="mdi-clock-time-four-outline"
                                    outlined
                                    :value="timeDisplay"
                                    class="mt-n7"
                                ></v-text-field>
                              </template>
                              <v-time-picker
                                  v-if="menu2"
                                  v-model="request.time"
                                  full-width
                                  @click:minute="$refs.menu.save(request.time)"
                              ></v-time-picker>
                            </v-menu>
                          </v-col>
                        </v-row>
                        <v-row class="row-input">
                          <v-col cols="12" md="12">
                            <v-textarea
                                v-model="request.additional_comment"
                                outlined
                                name="orderDesc"
                                label="Additional Comment"
                                class="course-req mt-n7"
                                color="#F56C08"
                            ></v-textarea>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="4" class="ma-auto" >
                      </v-col>
                      <v-col cols="12" md="4" class="ma-auto mt-n6" >
                        <SubmitButton button-name="Submit" />
                      </v-col>
                      <v-col cols="12" md="4" class="ma-auto" >
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
import Loader from "@/components/ui/loader/Loader";
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import UserService from "@/services/user-services";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: 'SendOrder',
  components: {
    Loader,
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
      fields: {
      },
     image: '',
      request: {
        active_distributor: true,
        departure: '',
        destination: '',
        purpose_of_travel: '',
        active_contact_number: '',
        mode_of_travel: '',
        additional_comment: '',
        travel_schedule: '',
        time: null,
      },
      style: {'font-size': '18px', 'height': '53px', 'background': '#F56C08', 'color': '#E4F0D4', 'font-weight': 'bold'},
      modeOfTravel: [
        'Commercial', 'Private'
      ],
      dateMenu: false,
      minDate: "2019-30-12",
      submitted: false,
      errorMsg: "",
      message: ".",
      loading: false,
      menu2: false,
    };
  },
  computed: {
    dateDisplay() {
      return this.request.travel_schedule;
    },
    timeDisplay() {
      return this.request.time;
    },
  },
  methods: {
    handleCreateDistributorRequest() {
      if (!this.request.active_distributor) {
        alert('Sorry, you have to activate "active distributor" to place a request');
        return;
      }
      if (!this.request.travel_schedule) {
        alert('Please select a travel schedule');
        return;
      }
      if (!this.request.time) {
        alert('Please select a travel time');
        return;
      }
      this.loading = true;
      console.log(this.request.travel_schedule+'T'+this.request.time)
      let request = {
        active_distributor: this.request.active_distributor,
        departure: this.request.departure,
        destination: this.request.destination,
        purpose_of_travel: this.request.purpose_of_travel,
        active_contact_number: this.request.active_contact_number,
        mode_of_travel: this.request.mode_of_travel,
        additional_comment: this.request.additional_comment,
        travel_schedule: this.request.travel_schedule+'T'+this.request.time,
      };
      UserService.handleCreateDistributorRequest(request).then(
          res => {
            console.log(res.data);
            this.$router.push("/request-order-done");
            this.submitted = true;
            setTimeout(() => (this.$router.push("/distributor/interested-senders")), 3000);
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

<style scoped>
.component-container {
  background-color: #E4F0D4;
}
.headline {
  line-height: 31px;
  font-style: normal;
  font-weight: bold;
  color: #F56C08;
  text-align: center;
}
v-card {
  transition: opacity 0.4s ease-in-out;
  background-color: transparent !important;
}
v-card:not(.on-hover) {
  opacity: 0.6;
}
.solution {
  justify-content: center;
}
.card {
  background-color: #E4F0D5;
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