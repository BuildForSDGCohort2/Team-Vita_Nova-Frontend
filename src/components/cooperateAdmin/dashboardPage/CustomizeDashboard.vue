<template>
  <div>
    <v-row class="px-8">
      <v-col cols="12" md="6" class="p-tag">
        <p>The dashboard environment is where you would carry out different activities</p>
        <p>In this step you will customize the dashboard to fit your brand.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-list class="pl-10">
          <v-list-item-subtitle>Upload your brand logo</v-list-item-subtitle>
        </v-list>
        <v-file-input v-model="files" label="Choose from file" outlined filled>
          <template v-slot:selection="{ text }">
            <v-chip small label color="primary">{{ text }}</v-chip>
          </template>
        </v-file-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6"></v-col>
      <v-col cols="12" md="6" class="pl-12">
        <v-list>
          <v-list-item-subtitle>Choose a primary color</v-list-item-subtitle>
        </v-list>
        <v-btn
          tile
          color="#960C0C"
          class="drop-down-button"
          @click.stop="color = !color"
          width="300"
          height="50"
        >
          <v-icon color="white">mdi-pencil</v-icon>
        </v-btn>

        <v-color-picker v-model="picker" elevation="10" v-show="color" class="mt-2"></v-color-picker>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6"></v-col>
      <v-col cols="12" md="6" class="pl-12 my-2">
        <v-btn color="#FF2E2E" dark width="300" height="50">Save and Continue</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    files: [],
    picker: null,
    color: false
  })
};
</script>

<style scoped>
.p-tag p {
  font-size: 15px;
  color: grey;
}
</style>