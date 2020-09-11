<template>
  <v-card rounded width="400" class="px-8">
    <v-toolbar light flat>
      <v-spacer></v-spacer>
      <v-btn icon dark @click="closeModal" color="grey">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="mb-4">
      <h1>Remove Employee(s)</h1>
    </div>
    <div class="mb-10">
      <p>Deleting this user(s) would mean that you resist access to course and other important aspect of this service available on the platform, kindly confirm removal.</p>
    </div>
    <v-btn large class="mb-12 px-8 mr-4" dark outlined color="red" @click="closeModal">Remove</v-btn>
    <v-btn large class="mb-12 px-12 ml" color="red" dark @click="closeModal">Close</v-btn>
  </v-card>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
</style>