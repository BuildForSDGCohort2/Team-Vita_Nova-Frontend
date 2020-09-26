<template>
  <v-responsive>
    <v-container style="width: available">
      <v-card
          flat
          rounded="lg"
          width="auto"
          height="auto"
          :style="{'background-color': '#E4F0D4', 'background-size': 'cover'}"
      >
        <div>
          <v-list-item>
            <v-list-item-content>
              <v-list-item>
                <v-card-text class="prop mt-n5">
                  <h1
                      :style="{'font-family': 'IBM Plex Sans', 'font-size': '20px', 'line-height': '56px'}"
                  >
                    Notification
                    <v-btn icon>
                      <v-icon class="mt-n2">mdi-bell</v-icon>
                    </v-btn>
                  </h1>
                </v-card-text>
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-row>
          <v-col cols="12">
            <v-divider class="divider mt-n12"></v-divider>
          </v-col>
        </v-row>
        <div>
          <v-card-text class="prop" v-for="notification in notifications">
            <v-row class="solution mt-n12 mb-3 ml-5">
              <v-col cols="12 md=8" sm="6">
                {{ notification.title }}
              </v-col>
              <v-col cols="12" md="4" sm="10">
                <v-btn class="mt-n2" outlined color="#F56C08" style="text-transform: capitalize">
                  <span style="color: #F56C08">View</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </div>
      </v-card>
      <v-fab-transition>
        <div class="d-flex flex-row-reverse">
          <v-btn large fab dark color="transparent" fixed right bottom>
            <img src="../../../assets/vitaNova/message-icon.png" class="chat" height="60" alt />
          </v-btn>
        </div>
      </v-fab-transition>
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
    color: false,
    fab: false,
    notifications: [
      {
        title: 'New Distributor found for your current Send Order'
      },
      {
        title: 'New Sender found for your current active Distributor status'
      },
      {
        title: 'New Sender found for your current active Distributor status'
      },
      {
        title: 'New Distributor found for your current Send Order'
      }
    ]
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
      this.$router.push({ path: '/distributor-orders' });
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
  text-align: justify;
}
.solution {
  justify-content: start;
}
.divider {
  width: 1474px;
  height: 12px;
  left: 0;
  top: 759px;

  background: #294503;
  border-radius: 12px;
}
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>