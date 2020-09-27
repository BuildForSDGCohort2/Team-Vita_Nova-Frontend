<template>
  <v-container fluid class="confirm-amail-background">
    <v-card width="450" height="550px" class="success-top ma-auto">
      <v-main class="success-container">
        <v-list-item>
          <img src="../../assets/vitaNova/thumbs-up-orange.svg" class="success-circle" alt=""/>
        </v-list-item>
        <v-card-text class="success-title text-wrap" :style="{'font-family': 'IBM Plex Sans'}">
          <h6>
            Confirm your
            <br />Email Address
          </h6>
        </v-card-text>

        <v-card-text class="success-text" :style="{'font-family': 'IBM Plex Sans'}">
          <p>
            Your account has been created successfully.
            Kindly confirm your mail to log in to the platform
          </p>
        </v-card-text>
      </v-main>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ConfirmEmailPage"
};
</script>

<style scoped>
.confirm-amail-background {
  background-color: #E4F0D4 !important;
}
.success-top {
  /*margin-top: 5% !important;*/
  border-radius: 6px !important;
  border-bottom: 0 !important;
  background-color: #E4F0D4 !important;
}
.success-container {
  margin-left: 25%;
  margin-right: 25%;
  padding-top: 10%;
}
.success-circle {
  height: 73px !important;
  min-width: 73px !important;
  width: 73px !important;
  margin-top: 45% !important;
  margin-bottom: 40px !important;
}
.success-title {
  font-style: normal;
  font-weight: bold;
  font-size: 49px;
  line-height: 35px;
  /*display: flex;*/
  align-items: center;
  letter-spacing: -0.02em;
  padding: 0 !important;
  color: #F56C08;
  margin-bottom: 20px;
}
.success-text {
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-bottom: 30px;
  padding: 0 !important;

  color: #2b1c1c;
}
</style>