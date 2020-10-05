<template>
  <v-responsive class="component-container">
    <v-container grid-list-xl>
      <div :style="{'font-family': 'IBM Plex Sans'}">
        <v-row>
          <v-col cols="12" md="3" sm="8">
            <v-row>
              <v-col class="mt-n5 ml-lg-9">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <v-form
                      class="course-form"
                      @submit.prevent="handleSubmit(handleViewActiveSendOrders)">
                    <div>
                      <SubmitButton button-name="Active Send Orders" />
                    </div>
                  </v-form>
                </ValidationObserver>
              </v-col>
            </v-row>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="3" sm="8">
            <v-row>
              <v-col class="mt-n5 mr-lg-5">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <v-form
                      class="course-form mx-3"
                      @submit.prevent="handleSubmit(handleCreateSendOrder)">
                    <div>
                      <SubmitButton button-name="Create Send Order" />
                    </div>
                  </v-form>
                </ValidationObserver>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="d-flex mx-5">
          <div class="headline ml-2 mt-8 mb-5">
            <h1
                :style="{'font-family': 'IBM Plex Sans', 'font-size': '38px', 'line-height': '56px'}"
            >Sender Orders</h1>
          </div>
        </v-row>
        <div v-if="orders.length === 0" style="height: 450px; background-color: #E4F0D4;">
        </div>
        <div v-else style="background-color: #E4F0D4;">
          <div v-for="order in orders" v-if="orders.length !== 0">
            <v-row  class="align-center justify-center mt-n2">
              <v-col cols="12" md="12" sm="8">
                <v-card
                    class="card mx-auto pa-2"
                    max-width="1000"
                    outlined
                    rounded="lg"
                >
                  <v-row>
                    <v-col cols="12" md="3" sm="6">
                      <v-img :src="order.goods_image" alt="" max-height="177" max-width="203"/>
                    </v-col>
                    <v-col cols="12" md="5" sm="8" class="ml-lg-n10 mr-lg-10 mt-0">
                      <v-list-item class="card-text mt-n3" :style="{'font-family': 'IBM Plex Sans'}">
                        Schedule :  {{ order.travel_schedule }}
                      </v-list-item>
                      <v-list-item class="card-text mt-n3" :style="{'font-family': 'IBM Plex Sans'}">
                        From :  {{ order.departure }}
                      </v-list-item>
                      <v-list-item class="card-text mt-n3" :style="{'font-family': 'IBM Plex Sans'}">
                        Destination :  {{ order.destination }}
                      </v-list-item>
                      <v-list-item class="card-text mt-n3" :style="{'font-family': 'IBM Plex Sans'}">
                        Budget :  {{ order.budget }}
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" md="2" sm="8">
                      <v-row>
                        <v-col class="mt-n5">
                          <ValidationObserver v-slot="{ handleSubmit }">
                            <v-form
                                class="course-form"
                                @submit.prevent="handleSubmit(handleEditOrder)">
                              <div>
                                <SubmitButton button-name="Edit Order" />
                              </div>
                            </v-form>
                          </ValidationObserver>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="2" sm="8">
                      <v-row>
                        <v-col class="mt-n5">
                          <ValidationObserver v-slot="{ handleSubmit }">
                            <v-form
                                class="course-form"
                                @submit.prevent="handleSubmit(handleGoodsDetails)">
                              <div>
                                <SubmitButton button-name="Goods Details" />
                              </div>
                            </v-form>
                          </ValidationObserver>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>

                </v-card>
              </v-col>
            </v-row>
          </div>
          <div v-else style="height: 450px; ">
            <v-row  class="align-center justify-center">
              <v-col cols="12" md="12" sm="8">
                <v-card
                    class="card mx-auto pa-2"
                    max-width="1000"
                    outlined
                    rounded="lg"
                >
                  <v-row>
                    <v-col cols="12" md="8" sm="10" class="ml-lg-10 mr-lg-10">
                      {{ orders.message }}
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-container>
  </v-responsive>
</template>

<script>
import UserService from "@/services/user-services";
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import { ValidationObserver } from "vee-validate";
import Loader from "@/components/ui/loader/Loader";

export default {
  components: {
    Loader,
    SubmitButton,
    ValidationObserver
  },
  name: 'Senders',
  props: {
  },
  data: function () {
    return {
      orders: [],
      loading: false,
    };
  },
  computed: {
  },
  methods:{
    getSendOrders(){
      this.loading = true;
      UserService.getSendOrders()
          .then(res =>{
                console.log(res.data)
                this.orders = res.data;
              },
              error => {
                this.loading = false;
                console.log(error.response);
                this.errorMsg = error.response.data.detail;
              }
          )
    },
    handleEditOrder() {
      this.$router.push({ path: '/' });
    },
    handleGoodsDetails() {
      this.$router.push({ path: '/' });
    },
    handleCreateSendOrder() {
      this.$router.push({ path: '/sender/create-send-order' });
    },
    handleViewActiveSendOrders() {
      this.$router.push({ path: '/sender/active-send-order' });
    }
  },
  created() {
    this.getSendOrders()
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

