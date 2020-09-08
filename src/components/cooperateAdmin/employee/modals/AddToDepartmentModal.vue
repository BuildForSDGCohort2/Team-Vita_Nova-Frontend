<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2 transparent-btn"
          elevation="singleSelect"
          color="grey"
          v-bind="attrs"
          v-on="on"
          light
        >
          <slot></slot>
        </v-btn>
      </template>
      <AddToDepartment @closeModal="toggleModal" />
    </v-dialog>
  </div>
</template>

<script>
import AddToDepartment from "../addToDepartment/AddToDepartment";
export default {
  data() {
    return {
      dialog: false,
      splashShow: false
    };
  },
  components: {
    AddToDepartment
  },
  methods: {
    toggleModal() {
      this.dialog = !this.dialog;
    }
  }
};
</script>

<style scoped>
.transparent-btn {
  background-color: transparent !important;
  padding: 0 0 !important;
}
</style>