<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      width="400"
      app
      color="#FAFAFA"
      clipped
      hide-overlay
    >
      <v-list nav dense>
        <v-row>
          <v-col cols="7">
            <v-list-item link to="/corporate/courseModule" class="menu">
              <v-list-item-icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Back</v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col cols="5" >
            <v-btn
              link to=""
              style="background-color:#F8F8F8; color: #FF2E2E; height: 50px !important; width: 120px !important;"
              >Add Module</v-btn
            >
          </v-col>
        </v-row>
      </v-list>

      <v-card class="text-center justify-center ma-4" height="auto">
        <v-list nav dense>
          <v-list-item @click.stop="drawer = !drawer">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title }}</v-list-item-title>
            <v-list-item-icon>
              <v-icon>{{
                drawer ? "mdi-chevron-down" : "mdi-chevron-up"
              }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>

        <div >

        <v-btn @click="saveCourse" style="margin-bottom: 50px ; margin-top: 50px; height: 50px !important; width: 80% "
          >+ Add Lesson</v-btn
        >

        </div>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    item:[ {title: 'Inspiration' }]
  }),
  methods: {
    handleLogout() {
      this.$store.dispatch("onboarding/userLogout");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
