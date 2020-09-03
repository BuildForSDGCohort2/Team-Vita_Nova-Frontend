<template>
  <div>
    <v-dialog v-model="dialog" max-width="400" persistent>
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
      <DeleteEmployee @closeModal="toggleModal" />
    </v-dialog>
  </div>
</template>

<script>
import DeleteEmployee from "../deleteEmployee/DeleteEmployee";
export default {
  data() {
    return {
      dialog: false,
      splashShow: false
    };
  },
  components: {
    DeleteEmployee
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