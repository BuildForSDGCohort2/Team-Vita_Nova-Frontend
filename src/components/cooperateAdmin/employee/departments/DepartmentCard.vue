<template>
  <v-card color="#fff" rounded="lg" elevation="4" width="400" height="200">
    <v-list-item>
      <v-card-text class="headline font-weight-bold">{{cards.department}}</v-card-text>

      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon color="black">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in menuItems" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>

    <v-card-actions class="card-actions">
      <v-list-item class="grow">
        <v-list-item-avatar
          color="black"
          class="avatar"
          v-for="(avatar, index) in cards.avatars"
          :class="avatarPosition(index)"
          :key="index"
          height="30"
          min-width="0.2"
          width="30"
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
.avatar-0 {
  position: absolute;
  left: 1.5rem;
}
.avatar-1 {
  position: absolute;
  left: 3rem;
}
.avatar-2 {
  position: absolute;
  left: 4.5rem;
}
.avatar-3 {
  position: absolute;
  left: 6rem;
}
.avatar-4 {
  position: absolute;
  left: 7.5rem;
}
.avatar-number {
  position: absolute;
  left: 10rem;
}
</style>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "Add Employees"
        },
        {
          title: "Add to department"
        },
        {
          title: "Remove Employee"
        }
      ]
    };
  },
  methods: {
    avatarPosition(index) {
      let avatarClass = "";
      return (avatarClass = `avatar-${index}`);
    }
  },
  props: {
    cards: Object
  }
};
</script>