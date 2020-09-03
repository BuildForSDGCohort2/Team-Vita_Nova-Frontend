<template>
  <v-container>
    <v-responsive>
      <h3 class="ma-4 " :style="{'font-family': 'IBM Plex Sans'}" style="padding-top: 5%">Untitled Audio</h3>
      <v-card class="text-center justify-center ma-4">
        <v-container  >
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

          <v-textarea
              name="input-7-1"
              hint="Add an Introduction, detailing what the student would be learning from this module "
              persistent-hint
              color="red"
              outlined
              class=" title-box "
              label="Introduction"
              auto-grow
          ></v-textarea>

          <v-text-field
              color="red"
              outlined
              class=" title-box "
              label="Add Text (Optional)"
              auto-grow
          ></v-text-field>

          <v-text-field
              color="red"
              outlined
              class=" title-box "
              label="Add Links (Optional)"
              auto-grow
          ></v-text-field>

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
        <v-checkbox v-model="accept" color="red">
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
          style="background: #F8F8F8;border-radius: 11px; height: 60px;"
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
  name: "AddContentVideo",

  data: () => ({
    items: ["Software Engineering", "Business Management", "Design Thinking"],
    model: [],
    accept: false,
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

<style scoped></style>
