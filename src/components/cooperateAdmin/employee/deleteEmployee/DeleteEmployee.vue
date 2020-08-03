<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click.stop="dialog = true">
      Open Dialog
    </v-btn>

    <v-dialog v-model="dialog" max-width="400" class="dialog-box">
      <v-card class="main-card">
        <v-toolbar class="tool">
          <v-btn icon @click="dialog = false">
            <v-icon color="black">mdi-close</v-icon>
          </v-btn>

          <v-toolbar-title class="close-title">CLOSE</v-toolbar-title>
        </v-toolbar>
        <v-card-title class="headline">Remove Employee(s)</v-card-title>

        <v-card-text class="card-message">
          Deleting this user(s) means that you restrict access to course and
          other important aspect of the service available on this platform.
          Kindly confirm removal.
        </v-card-text>

        <v-card-actions class="buttons">
          <v-btn color="" dark @click="dialog = false" class="cancel-button">
            Cancel
          </v-btn>

          <v-btn dark @click="dialog = false" class="remove-button">
            Remove
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "DeleteEmployee",
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped>
.main-card {
  height: 100%;
  padding: 20px;
}
.close-title {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 126%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
}
.headline {
  padding-top: 10px !important;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 25px !important;
  line-height: 27px;
  color: #2b1c1c !important;
}
.card-message {
  padding-top: 10px !important;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 26px;
  align-items: center !important;

  letter-spacing: 0.05em;
  color: #000000 !important;
}
.buttons {
  margin-left: 4%;
}
.cancel-button {
  height: 40px !important;
  width: 50%;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 37px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ff2e2e !important;
  background: #ffffff !important;
  border: 2px solid #f8f8f8;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(43, 28, 28, 0.15);
  border-radius: 20px;
  border: 2px solid #ff2e2e;
  box-sizing: border-box;
  border-radius: 8px;
}

.remove-button {
  height: 40px !important;
  width: 50%;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 37px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff !important;
  background: #ff2e2e !important;
  border-radius: 8px;
}
.tool {
  box-shadow: none !important;
}

@media only screen and (max-width: 600px) {
  .headline {
    font-size: 25px;
  }
}
</style>