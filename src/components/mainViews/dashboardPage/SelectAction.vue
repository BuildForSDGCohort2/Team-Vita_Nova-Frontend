<template>
  <v-responsive>
    <v-container style="width: available">
      <v-card
          flat
          rounded="lg"
          width="auto"
          height="auto"
          :style="{'background-color': '#E4F0D4', 'background-size': 'cover'}"
          class="mt-n5"
      >
        <div>
          <v-list-item>
            <v-list-item-content>
              <v-list-item>
                <v-card-text class="prop mt-n5">
                  <h1
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '28px', 'line-height': '56px'}"
                  >What do you wish to do today?</h1>
                </v-card-text>
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-row class="solution">
          <v-col  md="6" sm="8" >
            <v-row class="solution">
              <v-col cols="12 md=8" sm="6">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <v-form
                      class="course-form"
                      v-if="!submitted_send"
                      @submit.prevent="handleSubmit(handleSender)">
                    <div>
                      <SubmitButton button-name="Create Send Order" />
                    </div>
                  </v-form>
                </ValidationObserver>
              </v-col>
            </v-row>
          </v-col>
          <v-col  md="6" sm="8" >
            <v-row class="solution">
              <v-col cols="12 md=8" sm="6">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <v-form
                      class="course-form"
                      v-if="!submitted_distribute"
                      @submit.prevent="handleSubmit(handleDistributor)">
                    <div>
                      <SubmitButton button-name="Active Distributor" />
                    </div>
                  </v-form>
                </ValidationObserver>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
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
  data: () => ({
    submitted_send: false,
    submitted_distribute: false,
    files: [],
    picker: null,
    color: false
  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    handleSender() {
      this.$router.push({ path: '/send-orders' });
    },
    handleDistributor() {
      this.$router.push({ path: '/distributor/distributor-orders' });
    },
  }
};
</script>

<style scoped>
.p-tag p {
  font-size: 15px;
  color: grey;
}
.prop {
  font-family: IBM Plex Sans, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.69);
  text-align: center;
}
.solution {
  justify-content: center;
}
</style>