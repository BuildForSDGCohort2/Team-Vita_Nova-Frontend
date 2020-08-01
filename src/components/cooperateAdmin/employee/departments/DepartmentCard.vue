<template>
  <v-card color="#fff" rounded="lg" elevation="4" width="400" height="200">
    <v-list-item>
      <v-card-text class="headline font-weight-bold">{{cards.department}}</v-card-text>

      <v-icon>mdi-dots-vertical</v-icon>
    </v-list-item>

    <v-card-actions class="card-actions">
      <v-list-item class="grow">
        <v-list-item-avatar
          color="black"
          class="avatar"
          v-for="(avatar, index) in cards.avatars"
          :class="avatarPosition(index)"
          :key="index"
        >
          <v-img class="pa-2" :src="avatar.image"></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="avatar-number">
          <v-list-item-title>+3 more</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.card-actions {
  position: absolute;
  bottom: 1rem;
}
.avatar {
  margin: 0 0 !important;
}
.avatar-1 {
  position: absolute;
  left: 3rem;
}
.avatar-2 {
  position: absolute;
  left: 5rem;
}
.avatar-number {
  position: absolute;
  left: 10rem;
}
</style>

<script>
export default {
  methods: {
    avatarPosition(index) {
      let avatarClass = "";
      if (index > 0) return (avatarClass = `avatar-${index}`);
      else {
        return " ";
      }
    }
  },
  props: {
    cards: Object
  }
};
</script>