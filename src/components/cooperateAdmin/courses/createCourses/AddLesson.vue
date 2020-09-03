<template>
  <div>
      <v-card class="mx-auto mt-4 align-center" max-width="500" rounded :style="{'font-family': 'IBM Plex Sans'}">
        <v-main class="text-center justify-center" justify="center">
          <img src="../../assets/thumbs-up-orange.svg"
               :style="{'font-family': 'IBM Plex Sans'}"
               class="invite-circle" alt=""/>
          <v-card-text
              :style="{'font-family': 'IBM Plex Sans'}"
              class="text-center justify-center invite-title">
            <h3>
              Add Lesson
            </h3>
          </v-card-text>

          <v-card-text class="text-center justify-center invite-text" :style="{'font-family': 'IBM Plex Sans'}">
            <p>
              Your employees would be notified via <br />email to join the
              digital classroom.
            </p>
          </v-card-text>
          <v-btn
              class="text-center justify-center invite-cancel"
              :style="{'font-family': 'IBM Plex Sans'}"
              style="background: #FF2E2E;
                 border-radius: 4px;"
          >
            <h4 :style="{'font-family': 'IBM Plex Sans'}">Cancel</h4>
          </v-btn>
        </v-main>
      </v-card>
  </div>
</template>

<script>
export default {
  name: "EmployeeInviteSent",
  data() {
    return {
      dialog: false
    };
  },
  components: {}
};
</script>

<style scoped>
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
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
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
