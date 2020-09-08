<template>
  <v-container>
    <v-responsive>
      <h3 class="ma-4 " style="padding-top: 5%">Untitled Module</h3>
      <v-card class="ma-4">
        <ValidationObserver v-slot="{ handleSubmit }">
          <v-form
              class="course-form"
              v-if="!submitted"
              @submit.prevent="handleSubmit(handleCreateCourseModule)"
          >
            <div v-if="errorMsg">
              <span class="err text-xl-center">{{ errorMsg }}</span>
            </div>
            <v-container fluid>
              <v-text-field
                  v-model="course.courseModuleTitle"
                  :items="items"
                  :search-input.sync="search"
                  hide-selected
                  hint="Don’t worry, you can always change this."
                  label="Title"
                  outlined
                  persistent-hint
                  chips
                  color="red"
                  class=" title-box "
              >
              </v-text-field>

              <v-row :style="{ 'justify-content': 'center' }">
                <v-col cols="12" md="8">
                  <ValidationProvider
                      name="Introduction"
                      rules="required|max:1000"
                      v-slot="{ errors }"
                      persistent-hint
                      class=" title-box "
                  >
                    <span class="err mt-n8 mb-3">{{ errors[0] }}</span>
                    <vue-editor
                        class="mt-0"
                        placeholder="Introduction"
                        v-model="course.introduction"
                        :editor-toolbar="customToolbar"
                    />
                  </ValidationProvider>
                </v-col>
              </v-row>

              <!--          <v-textarea-->
              <!--            name="input-7-1"-->
              <!--            hint="Add an Introduction, detailing what the student would be learning from this module "-->
              <!--            persistent-hint-->
              <!--            color="red"-->
              <!--            outlined-->
              <!--            class=" title-box "-->
              <!--            label="Introduction"-->
              <!--            auto-grow-->
              <!--          ></v-textarea>-->

              <v-card-actions style="margin-left: 16%">
                <v-btn
                    @click="discard"
                    style="background-color:#F8F8F8; color: #FF2E2E; height: 50px !important; width: 120px !important;"
                >Discard</v-btn
                >
                <v-btn
                    class="ma-4"
                    @click="saveModule"
                    style="background-color: #FF2E2E; color: #F8F8F8; height: 50px !important; width: 120px !important;"
                >Save</v-btn
                >
              </v-card-actions>
            </v-container>
          </v-form>
        </ValidationObserver>
      </v-card>

      <section style="padding-top: 100px; padding-bottom: 100px" class="ma-4">
        <h3>Lesson Settings</h3>
        <v-checkbox v-model="accept"

                    ref="checkbox"
                    color="red">
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
import { VueEditor } from "vue2-editor";
import UserService from "@/services/user-services";

export default {
  name: "AddContentText",
  components: {
    VueEditor
  },

  data: () => ({
    items: ["Software Engineering", "Business Management", "Design Thinking"],
    model: [],
    en: {
      messages: {}
    },
    fields: {
      learning_outcome: {
        max: "Must not be more than 1000 words"
      }
    },
    course: {
      image: null,
      courseModuleTitle: "",
      introduction: "",
    },
    customToolbar: [
      ["bold", "italic", "underline"],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" }
      ],
      [{ list: "ordered" }, { list: "bullet" }, "link"],
      [{ size: ["small", false, "large", "huge"] }]
    ],
    errorMsg: "",
    message: ".",
    accept: false,
    agree: false,
    submitted: false,
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
    handleSubmit() {
    },

    handleImage(e) {
      this.image = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.course.image = reader.result;
      };
      reader.readAsDataURL(this.image);
    },
    handleCreateCourseModule() {
      this.loading = true;

      console.log(this.course);
      const data = {emails: this.model};

      UserService.handleCreateCourseModule(data)
          .then(res => {
            console.log(res.data);
            this.load = false;
            this.$emit("showSplash");
          })
          .catch(err => {
            console.log(err);
          });
    },

    discard() {
      return;
    }
  }
};
</script>

<style scoped>
.title-box {
  width: 66%;
  margin-left: 17%;
  margin-top: 5%;
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
