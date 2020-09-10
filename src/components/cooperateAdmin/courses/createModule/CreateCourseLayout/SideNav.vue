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
      <v-list nav>
        <v-row>
          <v-col  cols="7">
            <v-list-item
              @click="goBack"
              class="menu"
            >
              <v-list-item-icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Back</v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col v-if="show!==false" cols="5">
            <v-btn
              link
              to=""
              style="background-color:#F8F8F8; color: #FF2E2E; height: 50px !important; width: 120px !important;"
              >Add Module</v-btn
            >
          </v-col>
        </v-row>
      </v-list>
      <div v-if="show!==false">
        <ShowMenuIcons />
      </div>



      <div v-else class="text-center justify-center ma-4">
        <v-btn
          @click="addModule"
          color="red"
          style="margin-top: 100%; color: #F8F8F8; height: 50px !important; width: 80% "
          >+ Add a Module</v-btn
        >
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import ShowMenuIcons from "@/components/cooperateAdmin/courses/createModule/CreateCourseLayout/ShowMenuIcons";
export default {
  components: { ShowMenuIcons },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    show:false
  }),
  methods: {
    goBack() {
      this.$router.go(-1)
    },

    addModule() {
      this.show=true;
      this.$router.push("/cooperate/courseModule/untitled");
    }
  }
};
</script>

<style scoped></style>
