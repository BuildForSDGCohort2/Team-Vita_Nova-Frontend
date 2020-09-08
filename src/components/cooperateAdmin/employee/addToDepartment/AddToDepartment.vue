<template>
  <v-card rounded width="400" class="px-8">
    <v-toolbar light flat>
      <v-spacer></v-spacer>

      <v-btn icon dark @click="closeModal" color="grey">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="my-6">
      <h1>Add to Department</h1>
    </div>
    <v-select :items="items" label="Select Department" outlined color="red"></v-select>
    <v-btn large class="mb-12 mt-4 px-8 mr-3" dark outlined color="red" @click="closeModal">Cancel</v-btn>
    <v-btn large class="mb-12 mt-4 px-8" color="red" dark>Add to Department</v-btn>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  }),
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
</style>