<template>
  <v-responsive>
    <div>
      <v-row>
        <v-col cols="12" md="1"> </v-col>
        <v-col cols="12" md="10">
          <v-row>
            <v-col>
              <h1
                style="font-style: normal;
                        font-weight: 500;
                        font-size: 24.0167px;
                        line-height: 45px;
                        /* or 188% */


                        /* lamp-txt-1 */

                        color: #645262;"
              >
                Untitled Video
              </h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <template>
                <v-card class="card mx-auto pa-6" max-width="844" outlined>
                  <ValidationObserver v-slot="{ handleSubmit }">
                    <v-form
                      class="course-form"
                      v-if="!submitted"
                      @submit.prevent="handleSubmit(handleAddContentVideo)"
                    >
                      <div v-if="errorMsg">
                        <span class="err text-xl-center">{{ errorMsg }}</span>
                      </div>
                      <Loader :loading="loading" :message="message" />

                      <v-row :style="{ 'justify-content': 'center' }">
                        <v-col cols="12" md="8">
                          <ValidationProvider
                            name="Course Name"
                            rules="required|alpha"
                            v-slot="{ errors }"
                          >
                            <span class="err mt-2 mb-2">{{ errors[0] }}</span>
                            <v-text-field
                              v-model="course.title"
                              class="mt-3"
                              label="Title"
                              outlined
                              color="#FF2E2E"
                              name="courseTitle"
                              chips
                              clearable
                              multiple
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                      </v-row>

                      <v-row :style="{ 'justify-content': 'center' }">
                        <v-col cols="12" md="8" class="ma-auto">
                          <div
                            class="color-title"
                            :style="{ 'font-family': 'IBM Plex Sans' }"
                          >
                            Upload Video
                          </div>
                          <div v-if="!course.video">
                            <v-btn
                              :style="{ 'font-family': 'IBM Plex Sans' }"
                              block
                              x-large
                              class="#2B1C1C black--text mt-4"
                              @click="$refs.fileInput.click()"
                              dense
                              clearable
                            >
                              <v-icon class="ma-2" color="#645262"
                                >mdi-cloud-upload-outline</v-icon
                              >
                              Choose from files
                            </v-btn>
                            <input
                              ref="fileInput"
                              style="display: none"
                              type="file"
                              accept=".mp4"
                              @change="handleVideo"
                            />
                          </div>
                          <div v-else>
                            <v-btn
                              :style="{
                                'font-family': 'IBM Plex Sans',
                                'justify-content': 'start',
                                'text-decoration-line': 'underline'
                              }"
                              block
                              x-large
                              class="#2B1C1C black--text mt-4"
                              @click="$refs.fileInput.click()"
                              dense
                              clearable
                            >
                              {{ video.name }}
                            </v-btn>
                            <input
                              ref="fileInput"
                              style="display: none"
                              type="file"
                              accept=".mp4"
                              @change="handleVideo"
                            />
                          </div>
                        </v-col>
                      </v-row>

                      <!--                      <v-row :style="{ 'justify-content': 'center' }">-->
                      <!--                        <v-col cols="12" md="8">-->
                      <!--                          <ValidationProvider-->
                      <!--                            name="Introduction"-->
                      <!--                            rules="required|max:1000"-->
                      <!--                            v-slot="{ errors }"-->
                      <!--                          >-->
                      <!--                            <span class="err mt-n8 mb-3">{{ errors[0] }}</span>-->
                      <!--                            <vue-editor-->
                      <!--                              :style="{ 'font-family': 'IBM Plex Sans' }"-->
                      <!--                              class="mt-10 "-->
                      <!--                              placeholder="Introduction"-->
                      <!--                              v-model="course.introduction"-->
                      <!--                              :editor-toolbar="customToolbar"-->
                      <!--                            />-->
                      <!--                          </ValidationProvider>-->
                      <!--                        </v-col>-->
                      <!--                      </v-row>-->

                      <v-row :style="{ 'justify-content': 'center' }">
                        <v-col cols="12" md="8">
                          <ValidationProvider
                            name="Course Name"
                            rules="required|alpha"
                            v-slot="{ errors }"
                          >
                            <span class="err mt-2 mb-2">{{ errors[0] }}</span>
                            <v-text-field
                              color="red"
                              outlined
                              class=" title-box "
                              label="Add Text (Optional)"
                              auto-grow
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                      </v-row>

                      <v-row :style="{ 'justify-content': 'center' }">
                        <v-col cols="12" md="8">
                          <ValidationProvider
                            name="Course Name"
                            rules="required|alpha"
                            v-slot="{ errors }"
                          >
                            <span class="err mt-2 mb-2">{{ errors[0] }}</span>
                            <v-text-field
                              color="red"
                              outlined
                              class=" title-box "
                              label="Add Text (Optional)"
                              auto-grow
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                      <v-row :style="{ 'justify-content': 'center' }">
                        <v-col cols="12" md="8">
                          <v-card-actions>
                            <v-btn
                              @click="discard"
                              :style="{ 'font-family': 'IBM Plex Sans' }"
                              style="background-color:#F8F8F8; color: #FF2E2E; height: 50px !important; width: 120px !important;"
                              >Discard</v-btn
                            >
                            <v-btn
                              class="ma-4"
                              @click="handleSubmit"
                              :style="{ 'font-family': 'IBM Plex Sans' }"
                              style="background-color: #FF2E2E; color: #F8F8F8; height: 50px !important; width: 120px !important;"
                              >Save</v-btn
                            >
                          </v-card-actions>
                        </v-col>
                      </v-row>
                    </v-form>
                  </ValidationObserver>
                </v-card>
              </template>

              <section
                :style="{ 'font-family': 'IBM Plex Sans' }"
                style="padding-top: 100px; padding-bottom: 100px"
                class="ma-4"
              >
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
                :style="{ 'font-family': 'IBM Plex Sans' }"
                style="background: #F8F8F8;border-radius: 11px; height: 60px;"
              >
                <v-container fluid>
                  <v-row>
                    <!--                    <v-col cols="12" md="1">-->
                    <!--                      <v-img src="~@/assets/Group8.svg" alt="" max-width="20" max-height="64"/>-->
                    <!--                    </v-col>-->
                    <!--                    <v-col cols="12" md="11">-->
                    <h6>
                      Tip: Chapter(s) will be set to draft if there are no
                      lessons created for it.
                    </h6>
                    <!--                    </v-col>-->
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="mt-5" cols="12" md="1"> </v-col>
      </v-row>
    </div>
  </v-responsive>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Loader from "@/components/ui/loader/Loader";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import UserService from "@/services/user-services";

export default {
  name: "AddContentVideos",
  components: {
    Loader,
    VueEditor,
    ValidationProvider,
    ValidationObserver
  },
  props: {
    value: {
      type: String
    },
    method: { type: Function }
  },
  data: function() {
    return {
      condition: true,
      en: {
        messages: {}
      },
      fields: {
        learning_outcome: {
          max: "Must not be more than 1000 words"
        }
      },
      video: "",
      course: {
        video: null,
        title: "",
        introduction: ""
      },
      style: {
        "font-size": "18px",
        height: "53px",
        background: "#FF2E2E",
        color: "#FFF",
        "font-weight": "bold"
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
      submitted: false,
      errorMsg: "",
      message: ".",
      loading: false
    };
  },
  computed: {},
  methods: {
    mounted() {
      // Pass a value to the parent through the function
      this.method(this.condition);
    },
    handleVideo(e) {
      this.video = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.course.video = reader.result;
      };
      reader.readAsDataURL(this.video);
    },
    handleAddContentVideo(data) {
      this.loading = true;
      const vid = this.handleVideo();
      data = (vid, this.course);
      console.log(data);

      UserService.handleCreateCourseModule(data)
          .then(res => {
            console.log(res.data);
            this.load = false;
            this.$emit("showSplash");
          })
          .catch(err => {
            console.log(err);
          });

      // const data = { courses: this.course };
    }
  }
};
</script>

<style>
@import "~vue2-editor/dist/vue2-editor.css";

.card {
  background: #ffffff;
  border: 2px solid #f8f8f8;
  box-sizing: border-box;
  box-shadow: 0 2px 3px rgba(43, 28, 28, 0.15);
  border-radius: 15px 15px 0 0;
}
.err {
  display: block;
  color: #ff2e2e;
  font-size: 11px;
}
</style>
