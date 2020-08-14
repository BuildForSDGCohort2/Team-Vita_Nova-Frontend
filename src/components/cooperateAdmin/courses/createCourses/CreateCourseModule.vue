<template>
  <v-container>
    <v-responsive>
      <h3 class="ma-4 " style="padding-top: 10%">Untitled Module</h3>
      <v-card class="text-center justify-center ma-4">
        <v-container fluid>
          <v-text-field
            v-model="model"
            :items="items"
            :search-input.sync="search"
            hide-selected
            hint="Don’t worry, you can always change this."
            label="Title"
            multiple
            outlined
            persistent-hint
            chips
            color="red"
            class=" title-box "
          >
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    No course matching "<strong>{{ search }}</strong
                    >". Press <kbd>enter</kbd> to create a new one
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-text-field>
        </v-container>
      </v-card>

      <v-btn
        class="ma-4"
        @click="saveCourse"
        style="background-color: #FF2E2E; color: #F8F8F8; height: 50px !important; width: 120px !important;"
        >Save</v-btn
      >

      <v-card
        flat
        class="text-center justify-center ma-4"
        style="background: #F8F8F8;border-radius: 11.2578px; height: 60px; "
      >
        <v-container fluid>
          <h6 class="tip-text">
            Tip: Chapter(s) will be set to draft if there are no lessons created
            for it.
          </h6>
        </v-container>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "CreateCourseModule",

  data: () => ({
    items: ["Software Engineering", "Business Management", "Design Thinking"],
    model: [],
    search: null
  }),

  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    }
  },

  methods: {
    saveCourse() {}
  }
};
</script>

<style scoped>
.title-box {
  width: 70%;
  margin-left: 15%;
}
.tip-text {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13.5094px;
  line-height: 18px;
  /* identical to box height */
  margin-right: 25%;
  margin-top: 5px;
  /* semicolon-neutral-black */

  color: #2b1c1c;
}
</style>
