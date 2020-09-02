<<<<<<< HEAD
<template>
  <v-card class="mx-auto" max-width="800">
    <v-list-item>
      <v-list-item-content>
        <v-card-title>{{ title }}</v-card-title>

        <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
      </v-list-item-content>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-list-item>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-row class="pa-4">
          <v-col cols="12" md="6">
            <p>
              The dashboard environment is where you would carry out different
              activities
            </p>
            <p>
              In this step you will customize the dashboard to fit your brand.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-file-input
              v-model="files"
              placeholder="Upload your brand logo"
              filled
            >
              <template v-slot:selection="{ text }">
                <v-chip small label color="primary">{{ text }}</v-chip>
              </template>
            </v-file-input>
          </v-col>
        </v-row>
        <v-row class="px-4">
          <v-col cols="12" md="6"></v-col>
          <v-col cols="12" md="6">
            <v-btn
              tile
              color="#FAFAFA"
              class="ml-8 drop-down-button"
              @click.stop="color = !color"
            >
              <v-icon left>mdi-pencil</v-icon>Choose a primary colour
            </v-btn>
            <v-color-picker
              v-model="picker"
              elevation="10"
              v-show="color"
              class="ml-8 mt-2"
            ></v-color-picker>
          </v-col>
        </v-row>
        <v-row justify="center" class="center-button">
          <v-col cols="12" md="5"><InviteEmployee /></v-col>
          <v-col cols="12" md="6" class="ma-auto">
            <v-btn
              color="#FF2E2E"
              dark
              class="my-8 drop-down-button"
              @click.stop="color = !color"
              >Save and Continue</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import InviteEmployee from "@/views/cooperateAdmin/InviteEmployee";
export default {
  components: { InviteEmployee },
  props: {
    title: String
  },
  data: () => ({
    show: false,
    files: [],
    picker: null,
    color: false
  })
};
</script>

<style scoped>
  .drop-down-button {
    text-transform: none !important;
  }
</style>

}
