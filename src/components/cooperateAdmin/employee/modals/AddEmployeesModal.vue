<template>
  <div>
    <v-dialog v-model="dialog" width="500" hide-overlay>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2 transparent-btn"
          elevation="singleSelect"
          color="grey"
          v-bind="attrs"
          v-on="on"
          light
        >
          <v-icon left>mdi-plus</v-icon>Add New Employee
        </v-btn>
      </template>

      <InviteEmployee />
    </v-dialog>
  </div>
</template>

<script>
import InviteEmployee from "../inviteEmployee/InviteEmployee";
export default {
  data() {
    return {
      dialog: false
    };
  },
  components: {
    InviteEmployee
  }
};
</script>

<style  scoped>
.transparent-btn {
  background-color: transparent !important;
  padding: 0 0 !important;
}
</style>