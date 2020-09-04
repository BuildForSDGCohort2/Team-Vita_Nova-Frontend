<template>
  <v-container>
    <v-responsive>
      <h3 class="ma-4 " :style="{'font-family': 'IBM Plex Sans'}" style="padding-top: 5%">Untitled Video</h3>
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

          </v-text-field>

          <v-card-text
              class="uploader"
              @dragenter="OnDragEnter"
              @dragleave="OnDragLeave"
              @dragover.prevent
              @drop.prevent="onDrop"
              :class="{ dragging: isDragging }"
          >
            <i class="fa fa-cloud-upload"></i>

            <v-container>
              <v-icon v-bind="attrs" v-on="on" color="#645262" dark>mdi-cloud-upload</v-icon>
              <v-row id="file-drag-drop">
                <p class="drag drop-files">Drag & Drop files here</p>
                <v-input
                    type="file"
                    id="file"
                    accept=".mp4"
                    color="red"
                    show-size
                    counter
                    @change="onInputChange"
                ></v-input>
              </v-row>
            </v-container>
          </v-card-text>

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
              @click="discard"
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
  name: "AddContentVideo",

  data: () => ({
    items: ["Software Engineering", "Business Management", "Design Thinking"],
    model: [],
    accept: false,
    isDragging: false,
    dragCount: 0,
    dragAndDropCapable: false,
    files: [],
    agree: false,
    isLoading: false,
    rules: {
      // email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      // length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      // password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
      //     'Password must contain an upper case letter, a numeric character, and a special character',
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
    saveCourse() {},

    discard(){

    },
  }
};
</script>

<style scoped></style>
