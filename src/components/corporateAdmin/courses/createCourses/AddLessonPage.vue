<template>
  <v-container>
    <v-responsive>
      <h3 class="ma-4 " :style="{'font-family': 'IBM Plex Sans'}" style="padding-top: 5%">{{  }}</h3>
      <v-card class="ma-4">
        <v-container fluid >
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
          </v-text-field>

          <v-textarea
              name="input-7-1"
              color="red"
              outlined
              class=" title-box "
              label="Content"
              auto-grow
          ></v-textarea>

          <v-card-actions>
            <v-btn
                @click="saveCourse"
                :style="{'font-family': 'IBM Plex Sans'}"
                style="background-color:#F8F8F8; color: #FF2E2E; height: 50px !important; width: 120px !important;"
            >Discard</v-btn
            >
            <v-btn
                class="ma-4"
                @click="saveCourse"
                :style="{'font-family': 'IBM Plex Sans'}"
                style="background-color: #FF2E2E; color: #F8F8F8; height: 50px !important; width: 120px !important;"
            >Save</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>

      <section :style="{'font-family': 'IBM Plex Sans'}" style="padding-top: 100px; padding-bottom: 100px" class="ma-4">
        <h3>Lesson Settings</h3>
        <v-checkbox v-model="agreement" color="red">
          <template v-slot:label>
            Enable discussion on this lesson
          </template>
        </v-checkbox>

        <v-checkbox v-model="agree" color="red">
          <template v-slot:label>
            Make this lesson a free preview
          </template>
        </v-checkbox>
      </section>

      <v-card
          flat
          class="text-center justify-center ma-4"
          max-width="686"
          :style="{'font-family': 'IBM Plex Sans'}"
          style="background: #F8F8F8;border-radius: 11.2578px; height: 60px;"
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
    agreement: false,
    agree: false,
    isLoading: false,
    rules: {
      required: v => !!v || "This field is required"
    },
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
  margin-top: 5%;
}
.tip-text {
  /*font-family: IBM Plex Sans;*/
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
