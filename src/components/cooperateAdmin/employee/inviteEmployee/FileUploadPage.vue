<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-row class="cloudCol">
          <v-icon v-bind="attrs" v-on="on" color="#645262" dark>mdi-cloud-upload</v-icon>
          <p v-bind="attrs" v-on="on" class="inviteUpload">Upload CSV Document of Employees</p>
        </v-row>
      </template>

      <v-card class="card-level" v-on:click.self="btnClick" :closeOnEscape="closeOnEscape">
        <p class="xClose" @click="btnClick">x</p>
        <v-form class="invite-form" v-if="!submitted" @submit.prevent="inviteEmployee">
          <v-card-text
            class="uploader"
            @dragenter="OnDragEnter"
            @dragleave="OnDragLeave"
            @dragover.prevent
            @drop.prevent="onDrop"
            :class="{ dragging: isDragging }"
          >
            <i class="fa fa-cloud-upload"></i>

            <v-container>
              <v-icon v-bind="attrs" v-on="on" color="#645262" dark>mdi-cloud-upload</v-icon>
              <v-row>
                <p class="drag">Drag & Drop files here</p>
                <v-input
                  type="file"
                  id="file"
                  accept=".csv"
                  color="red"
                  show-size
                  counter
                  @change="onInputChange"
                ></v-input>
              </v-row>
              <!--                        <v-row>-->
              <!--                            <ul>-->
              <!--                                <li v-for="file in files">-->
              <!--                                    {{ file.name }} ({{ file.size | kb }} kb) <button @click="removeFile(file)" title="Remove">X</button>-->
              <!--                                </li>-->
              <!--                            </ul>-->
              <!--                        </v-row>-->
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              x-large
              class="pl-7 pr-7 submit-button-container"
              type="submit"
              :disabled="uploadDisabled"
              @click="dailog = false"
            >Upload</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
// import axios from "axios";
// import Vue from "vue";
// import router from "../../../router";
import UserService from "../../../../services/user-services";

// Vue.filter('kb', val => {
//     return Math.floor(val/1024);
// });

export default {
  name: "FileUploadPage",
  components: {},
  data() {
    return {
      isDragging: false,
      dragCount: 0,
      files: [],
      dialog: false,
      submitted: false,
      // kb:0,
      closeOnEscape: true
    };
  },
  computed: {
    uploadDisabled() {
      console.log("inside upload disable");
      return this.files.length === 0;
    }
  },
  methods: {
    OnDragEnter(e) {
      e.preventDefault();

      this.dragCount++;
      this.isDragging = true;
    },

    btnClick: function() {
      this.$refs.dialog.hide();
    },

    OnDragLeave(e) {
      e.preventDefault();

      this.dragCount--;
      this.isDragging = false;

      if (this.dragCount <= 0) this.isDragging = false;
    },

    onInputChange(e) {
      console.log(e);
    },

    onDrop(e) {
      e.preventDefault();
      e.stopPropagation();

      this.isDragging = false;

      const droppedFiles = e.dataTransfer.files;

      if (!droppedFiles) return;
      [...droppedFiles].forEach(f => {
        this.files.push(f);
      });
    },

    removeFile(file) {
      this.files = this.files.filter(f => {
        return f != file;
      });
    },

    inviteEmployee() {
      this.loading = true;
      const data = new FormData();
      this.files.forEach((f, x) => {
        data.append("file" + (x + 1), f);
      });
      console.log("in the method", data);
      UserService.inviteEmployee(data)
        // .then(res => res.json())
        .then(
          res => {
            console.log("done uploading", res.data);
            this.$router.push("/dashboard");
            this.submitted = true;
          },
          error => {
            this.loading = false;
            this.errorMsg = error.response.data.detail;
          }
        )
        .catch(err => {
          console.log(err.res.data);
        });
      console.log("we are done");
    }
  }
};
</script>

<style >
.card-level {
  height: 400px;
}
.invite-form {
  width: 70%;
  margin-left: 10em;
  padding-top: 4em;
}
.drag {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  padding-left: 50px;
  /* identical to box height, or 105% */

  /* lamp-txt-1 */

  color: #645262;
}
.xClose {
  float: right;
  padding-right: 10px;
}
.uploader {
  width: 70%;
  color: #ffffff;
  padding: 40px 15px;
  text-align: center;
  border: 0.812796px dashed #645262;
  box-sizing: border-box;
  font-size: 20px;

  /*&.dragging {*/
  /*    color: #FFFFFF;*/
  /*    border: 3px dashed red;*/

  /*    .file-input label{*/
  /*        background: #FFFFFF;*/
  /*        color: red;*/
  /*    }*/
  /* }*/
  /* i {*/
  /*    font-size: 28px;*/
  /* }*/
  /* .file-input {*/
  /*    }*/
}
@media only screen and (max-width: 600px) {
  .invite-form {
    margin-left: 12%;
    width: 100%;
  }
  .cloudCol {
    max-width: fit-content;
  }
}
.cloudCol {
  height: 72px;
  justify-content: center;
  align-content: center;
  margin-bottom: 43px;
  background: #f8f8f8;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
}
.inviteUpload {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  /*letter-spacing: 0.05em;*/
  padding-left: 8px;
  margin-top: 15px;
  margin-bottom: 48px;
  justify-content: center;
  /* semicolon-neutral-black */

  color: #2b1c1c;
}
.submit-button-container {
  background: #ff2e2e !important;
  border-radius: 8px !important;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  width: 72%;
  line-height: 22px;
  margin-right: 8em;
  margin-top: 3em;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
  box-shadow: none !important;
}
</style>