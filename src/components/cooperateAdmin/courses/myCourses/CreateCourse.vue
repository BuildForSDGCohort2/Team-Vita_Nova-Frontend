<template>
  <v-responsive>
    <div>
      <div id="nav" class="nav">
        <nav>
          <router-link :to="{ name: 'myCourses'}" class="black--text text-decoration-none">Courses</router-link>/
          <router-link
            :to="{ name: 'myCourses'}"
            class="black--text text-decoration-none"
          >My Courses</router-link>/
          <router-link :to="{ name: ''}" :class="{ 'disabled': isActive, }">Create Course</router-link>
        </nav>
      </div>
      <v-row>
        <v-col cols="12" md="1"></v-col>
        <v-col cols="12" md="10">
          <v-row>
            <v-col>
              <h1>Create Course</h1>
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
                      @submit.prevent="handleSubmit(handleCreateCourse)"
                    >
                      <div v-if="errorMsg">
                        <span class="err text-xl-center">{{ errorMsg }}</span>
                      </div>
                      <Loader :loading="loading" :message="message" />
                      <v-row class="mt-5" :style="{'justify-content': 'center'}">
                        <v-col cols="12" md="8" class="ma-auto">
                          <div
                            class="color-title"
                            :style="{'font-family': 'IBM Plex Sans'}"
                          >Upload Course Image</div>
                          <div v-if="!course.image">
                            <v-btn
                              :style="{'font-family': 'IBM Plex Sans'}"
                              block
                              x-large
                              class="#2B1C1C black--text mt-4"
                              @click="$refs.fileInput.click()"
                              dense
                              clearable
                            >
                              <v-icon class="ma-2" color="#645262">mdi-cloud-upload-outline</v-icon>Choose from files
                            </v-btn>
                            <input
                              ref="fileInput"
                              style="display: none"
                              type="file"
                              @change="handleImage"
                            />
                          </div>
                          <div v-else>
                            <v-btn
                              :style="{'font-family': 'IBM Plex Sans', 'justify-content': 'start', 'text-decoration-line': 'underline'}"
                              block
                              x-large
                              class="#2B1C1C black--text mt-4"
                              @click="$refs.fileInput.click()"
                              dense
                              clearable
                            >{{ image.name }}</v-btn>
                            <input
                              ref="fileInput"
                              style="display: none"
                              type="file"
                              @change="handleImage"
                            />
                          </div>
                        </v-col>
                      </v-row>
                      <v-row :style="{'justify-content': 'center'}">
                        <v-col cols="12" md="8">
                          <ValidationProvider
                            name="Course Name"
                            rules="required|alpha"
                            v-slot="{ errors }"
                          >
                            <span class="err mt-2 mb-2">{{ errors[0] }}</span>
                            <v-text-field
                              v-model="course.courseName"
                              class="mt-3"
                              label="Course Name"
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
                      <v-row :style="{'justify-content': 'center'}">
                        <v-col cols="12" md="8">
                          <v-combobox
                            v-model="course.selectCategory"
                            :items="items"
                            name="courseCategory"
                            label="Select Category"
                            multiple
                            outlined
                            clearable
                            class="mt-n5"
                            color="#FF2E2E"
                            persistent-hint
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                :key="JSON.stringify(data.item)"
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                :disabled="data.disabled"
                                @click:close="data.parent.selectItem(data.item)"
                              >
                                <v-avatar
                                  class="accent white--text"
                                  left
                                  v-text="data.item.slice(0, 1).toUpperCase()"
                                ></v-avatar>
                                {{ data.item }}
                              </v-chip>
                            </template>
                          </v-combobox>
                        </v-col>
                      </v-row>
                      <v-row :style="{'justify-content': 'center'}">
                        <v-col cols="12" md="8">
                          <ValidationProvider
                            name="Course Requirements"
                            rules="required|alpha"
                            v-slot="{ errors }"
                          >
                            <span class="err mt-n9 mb-8">{{ errors[0] }}</span>
                            <v-textarea
                              v-model="course.courseRequirements"
                              outlined
                              name="courseReq"
                              label="Course Requirements"
                              class="mt-n5"
                              color="#FF2E2E"
                            ></v-textarea>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                      <v-row :style="{'justify-content': 'center'}">
                        <v-col cols="12" md="8">
                          <ValidationProvider
                            name="Learning Outcomes"
                            rules="required|max:1000"
                            v-slot="{ errors }"
                          >
                            <span class="err mt-n8 mb-3">{{ errors[0] }}</span>
                            <vue-editor
                              :style="{'font-family': 'IBM Plex Sans'}"
                              class="mt-0"
                              placeholder="Learning Outcomes"
                              v-model="course.learningOutcomes"
                              :editor-toolbar="customToolbar"
                            />
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                      <v-row :style="{'justify-content': 'center'}">
                        <v-col cols="12" md="8">
                          <ValidationProvider
                            name="Course Description"
                            rules="required|alpha"
                            v-slot="{ errors }"
                          >
                            <span class="err mt-n1 mb-n2">{{ errors[0] }}</span>
                            <v-textarea
                              v-model="course.courseDescription"
                              outlined
                              name="courseDesc"
                              chips
                              label="Course Description"
                              color="#FF2E2E"
                              class="mt-5"
                            ></v-textarea>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                      <v-row :style="{'justify-content': 'center'}">
                        <v-col cols="12" md="8">
                          <v-combobox
                            v-model="course.addFacilitator"
                            :items="facilitatorNameSelect"
                            label="Add Facilitator (Optional)"
                            multiple
                            outlined
                            class="mt-n5"
                            color="#FF2E2E"
                            name="facilitatorName"
                            persistent-hint
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                :key="JSON.stringify(data.item)"
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                :disabled="data.disabled"
                                @click:close="data.parent.selectItem(data.item)"
                              >
                                <v-avatar
                                  class="accent white--text"
                                  left
                                  v-text="data.item.slice(0, 1).toUpperCase()"
                                ></v-avatar>
                                {{ data.item }}
                              </v-chip>
                            </template>
                          </v-combobox>
                        </v-col>
                      </v-row>
                      <v-row :style="{'justify-content': 'center'}">
                        <v-col cols="12" md="4">
                          <v-menu
                            v-model="startDateMenu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            :nudge-right="40"
                            offset-y
                            max-width="290px"
                            min-width="250"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-on="on"
                                append-icon="mdi-chevron-down"
                                label="Start Date"
                                readonly
                                outlined
                                :value="startDateDisplay"
                                class="mt-n5"
                                color="#FF2E2E"
                                v-bind="attrs"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="course.startDate"
                              locale="en-in"
                              no-title
                              @input="startDateMenu = false"
                              :min="minDate"
                            ></v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-menu
                            v-model="endDateMenu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            :nudge-right="40"
                            offset-y
                            max-width="290px"
                            min-width="250"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-on="on"
                                append-icon="mdi-chevron-down"
                                label="End Date"
                                readonly
                                outlined
                                v-bind="attrs"
                                :value="endDateDisplay"
                                class="mt-n5"
                                color="#FF2E2E"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="course.endDate"
                              locale="en-in"
                              no-title
                              @input="endDateMenu = false"
                              :min="minDate"
                            ></v-date-picker>
                          </v-menu>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="2" class="ma-auto"></v-col>
                        <v-col cols="12" md="3" class="ma-auto mt-n6">
                          <SubmitButton button-name="Create Course" />
                        </v-col>
                        <v-col cols="12" md="7" class="ma-auto"></v-col>
                      </v-row>
                    </v-form>
                  </ValidationObserver>
                </v-card>
              </template>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="mt-5" cols="12" md="1"></v-col>
      </v-row>
    </div>
  </v-responsive>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Loader from "@/components/ui/loader/Loader";
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "CreateCourse",
  components: {
    Loader,
    VueEditor,
    SubmitButton,
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
      en: {
        messages: {}
      },
      fields: {
        learning_outcome: {
          max: "Must not be more than 1000 words"
        }
      },
      image: "",
      isActive: true,
      course: {
        image: null,
        courseName: "",
        courseRequirements: "",
        learningOutcomes: "",
        courseDescription: "",
        selectCategory: [],
        addFacilitator: [],
        startDate: "",
        endDate: ""
      },
      style: {
        "font-size": "18px",
        height: "53px",
        background: "#FF2E2E",
        color: "#FFF",
        "font-weight": "bold"
      },
      items: ["Programming", "Design", "Vue", "Vuetify"],
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
      startDateMenu: false,
      endDateMenu: false,
      minDate: "2010-5-7",
      maxDate: "2010-12-12",
      submitted: false,
      errorMsg: "",
      message: ".",
      loading: false
    };
  },
  computed: {
    startDateDisplay() {
      return this.course.startDate;
    },
    endDateDisplay() {
      return this.course.endDate;
    },
    facilitatorNameSelect() {
      return ["Ken", "Nonso", "Tobi", "Sam"];
    }
  },
  methods: {
    handleImage(e) {
      this.image = e.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.course.image = reader.result;
      };
      reader.readAsDataURL(this.image);
    },
    handleCreateCourse() {
      this.loading = true;
      console.log(this.course);
      // const data = { courses: this.course };
    }
  }
};
</script>

<style>
@import "~vue2-editor/dist/vue2-editor.css";
.nav-text {
  color: black;
  text-decoration: none;
}
.disabled {
  text-decoration: none !important;
  color: red !important;
  -webkit-user-select: none !important;
}
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