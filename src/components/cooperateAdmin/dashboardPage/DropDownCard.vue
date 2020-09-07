<template>
  <v-card class="mx-auto" max-width="800">
    <v-list-item>
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