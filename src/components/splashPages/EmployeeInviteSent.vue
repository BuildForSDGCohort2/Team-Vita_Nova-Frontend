<template>
  <v-card width="450" height="550px" class="invite-top ma-auto">
    <v-main class="invite-container">
      <v-list-item>
        <img src="../../assets/thumbs-up-orange.svg" class="invite-circle" />
        <!--                <v-list-item-avatar color="#FFF2C7" class="success-circle"></v-list-item-avatar>-->
      </v-list-item>
      <v-card-text class="invite-title text-wrap">
        <h6>
          Invites Sent!
        </h6>
      </v-card-text>

      <v-card-text class="invite-text">
        <p>
          Your employees would be notified via email to join the digital
          classroom.
        </p>
      </v-card-text>
    </v-main>
  </v-card>
</template>

<script>
export default {
  name: "EmployeeInviteSent",
  components:{

  }
};
</script>

<style scoped>
.invite-top {
  /*margin-top: 5% !important;*/
  border-radius: 6px !important;
  border-bottom: 0px !important;
}
.invite-container {
  margin-left: 25%;
  margin-right: 25%;
  padding-top: 10%;
}
.invite-circle {
  height: 73px !important;
  min-width: 73px !important;
  width: 73px !important;
  margin-top: 45% !important;
  margin-bottom: 40px !important;
}
.invite-title {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 49px;
  line-height: 35px;
  /*display: flex;*/
  align-items: center;
  letter-spacing: -0.02em;
  padding: 0px !important;
  color: #960c0c;
  margin-bottom: 20px;
}
.invite-text {
  font-family: IBM Plex Sans !important;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-bottom: 30px;
  padding: 0px !important;

  color: #2b1c1c;
}
</style>
