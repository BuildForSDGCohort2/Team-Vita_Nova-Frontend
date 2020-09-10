<template>
  <v-card class="text-center justify-center ma-4" height="auto">
    <v-list-item>
      <v-list-item-icon class="mt-8">
        <v-icon>mdi-view-dashboard-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-card-title>{{title}}</v-card-title>
      </v-list-item-content>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-list-item>

    <v-divider></v-divider>

    <v-expand-transition>
      <div v-show="show">
        <slot></slot>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String
  },
  data: () => ({
    show: false
  })
};
</script>

<style scoped>
.drop-down-button {
  text-transform: none !important;
}
</style>