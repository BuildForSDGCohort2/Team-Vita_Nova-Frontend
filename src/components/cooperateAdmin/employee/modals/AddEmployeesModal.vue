<template>
  <div>
    <v-dialog v-model="dialog" width="500" hide-overlay>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2 transparent-btn"
          elevation="singleSelect"
          color="grey"
          v-bind="attrs"
          v-on="on"
          light
        >
          <v-icon left>mdi-plus</v-icon>Add New Employee
        </v-btn>
      </template>

      <InviteEmployee @showSplash="showSplashModal" />
    </v-dialog>
    <v-dialog v-model="splashShow" max-width="500">
      <v-card class="text-center justify-center pt-10" rounded>
        <img src="../../../../assets/thumbs-up-orange.svg" class="invite-circle" />
        <v-card-text class="text-center justify-center invite-title">
          <h3>Invites Sent!</h3>
        </v-card-text>

        <v-card-text class="text-center justify-center invite-text">
          <p>
            Your employees would be notified via
            <br />email to join the
            digital classroom.
          </p>
        </v-card-text>
        <v-btn
          class="text-center justify-center invite-cancel"
          style="background: #FF2E2E;
                 border-radius: 4px;"
          @click="splashShow = false"
        >
          <h4>Close</h4>
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import InviteEmployee from "../inviteEmployee/InviteEmployee";
export default {
  data() {
    return {
      dialog: false,
      splashShow: false
    };
  },
  components: {
    InviteEmployee
  },
  methods: {
    showSplashModal() {
      this.splashShow = true;
      this.dialog = !this.dialog;
    }
  }
};
</script>

<style  scoped>
.transparent-btn {
  background-color: transparent !important;
  padding: 0 0 !important;
}
.invite-circle {
  width: 200px !important;
  height: 200px !important;
  min-width: 73px !important;
  margin-bottom: 40px !important;
}
.invite-title {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 47px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  /* semicolon-neutral-black */
  color: #2b1c1c;
}
.invite-text {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #2b1c1c;
}
.invite-cancel {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 15.4656px;
  line-height: 20px;
  width: 30%;
  height: 55px !important;
  /* identical to box height */
  margin-top: 5% !important;
  margin-bottom: 30% !important;
  letter-spacing: 0.05em;
  color: #ffffff;
}
</style>