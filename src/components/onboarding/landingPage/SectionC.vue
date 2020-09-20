<template>
  <v-responsive class="component-container">
    <v-container grid-list-xl>
      <div :style="{'font-family': 'IBM Plex Sans'}">
        <v-row class="solution">
          <div class="headline ml-0 mt-8">
            <h1
                :style="{'font-family': 'IBM Plex Sans', 'font-size': '38px', 'line-height': '56px'}"
            >Our Services</h1>
          </div>
        </v-row>
        <v-row class="solution mt-4">
          <v-col  md="5" sm="8" :loading="loading">
            <div class="overlay">
              <v-card rounded="lg" flat>
                <v-img height="300" src="../../../assets/vitaNova/i-stock-photo.jpg"></v-img>
              </v-card>
            </div>
            <v-row class="solution">
              <v-col>
                <v-card-text
                    class="card-text"
                    :style="{'font-family': 'IBM Plex Sans'}">
                  Users are able to become <span style="color: #F56C08">Senders</span> of goods from their location to the desired destination for a lesser fee by leveraging on the network of available distributors.
                </v-card-text>
              </v-col>
            </v-row>
            <v-row class="solution">
              <v-col cols="12 md=8" sm="6">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <v-form
                      class="course-form"
                      v-if="!submitted"
                      @submit.prevent="handleSubmit(handleSender)">
                    <div>
                      <SubmitButton button-name="Become a Sender" />
                    </div>
                  </v-form>
                </ValidationObserver>
              </v-col>
            </v-row>
          </v-col>
          <v-col  md="1" sm="8">
          </v-col>
          <v-col  md="5" sm="8" :loading="loading">
            <div class="overlay">
              <v-card rounded="lg" flat>
                <v-img height="300" src="../../../assets/vitaNova/kigali.jpg"></v-img>
              </v-card>
            </div>
            <v-row class="solution">
              <v-col>
                <v-card-text
                    class="card-text"
                    :style="{'font-family': 'IBM Plex Sans'}">
                  We provide users the opportunity to become <span style="color: #F56C08">Distributors</span> where they earn by traveling and delivering farm produce and other goods to their travel destinations on request..
                </v-card-text>
              </v-col>
            </v-row>
            <v-row class="solution">
              <v-col cols="12 md=8" sm="6">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <v-form
                      class="course-form"
                      v-if="!submitted"
                      @submit.prevent="handleSubmit(handleDistributor)">
                    <div>
                      <SubmitButton button-name="Become a Distributor" />
                    </div>
                  </v-form>
                </ValidationObserver>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-responsive>
</template>

<script>
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import { ValidationObserver } from "vee-validate";
export default {
  components: {
    SubmitButton,
    ValidationObserver
  },
  data() {
    return {
      submitted: false,
      loading: false,
    }
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    handleSender() {
      this.$router.push({ path: '/sender' });
    },
    handleDistributor() {
      this.$router.push({ path: '/distributor' });
    },
  }
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
.card-text {
  line-height: 33px;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
  background-color: transparent !important;
  text-align: center;
}
.solution {
  justify-content: center;
}
</style>