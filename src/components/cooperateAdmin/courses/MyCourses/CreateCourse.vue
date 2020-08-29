<template>
  <v-responsive>
    <div>
      <v-row >
        <v-col class="mt-n4" cols="12" md="6">
          <h4>
            <a class="links" @click="mounted" :style="{'color': '#645262'}">Courses</a> /
            <a class="links" :style="{'color': '#645262'}" @click="mounted">My Courses</a> /
            <a @click="" :style="{'color': '#FF2E2E'}">Create Course</a>
          </h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="1">
        </v-col>
        <v-col cols="12" md="10">
          <v-row>
            <v-col>
              <h1>Create Course</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <template>
                <v-card
                    class="card mx-auto pa-6"
                    max-width="844"
                    outlined
                >
                  <v-row class="mt-5" :style="{'justify-content': 'center'}">
                    <v-col cols="12" md="8" class="ma-auto">
                      <div class="color-title" :style="{'font-family': 'IBM Plex Sans'}">Upload Course Image</div>
                      <div v-if="!fileSelected">
                        <v-btn
                            :style="{'font-family': 'IBM Plex Sans'}"
                            block
                            x-large
                            class="#2B1C1C black--text mt-4"
                            @click="$refs.fileInput.click()"
                        >
                          <v-icon class="ma-2" color="#645262">mdi-cloud-upload-outline</v-icon>
                          Choose from files
                        </v-btn>
                        <input ref="fileInput" style="display: none" type="file" @change="handleImage"/></div>
                      <div v-else>
                        <v-btn
                            :style="{'font-family': 'IBM Plex Sans', 'justify-content': 'start', 'text-decoration-line': 'underline'}"
                            block
                            x-large
                            class="#2B1C1C black--text mt-4"
                            @click="$refs.fileInput.click()"
                        >
                          {{ fileSelected.name }}
                        </v-btn>
                        <input ref="fileInput" style="display: none" type="file" @change="handleImage"/></div>
                    </v-col>
                  </v-row>
                  <v-row :style="{'justify-content': 'center'}">
                    <v-col cols="12" md="8">
                      <v-text-field
                          v-model="courseName"
                          class="mt-2"
                          label="Course Name"
                          outlined
                          color="#FF2E2E"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row :style="{'justify-content': 'center'}">
                    <v-col cols="12" md="8">
                      <v-combobox
                          v-model="selectCategory"
                          :items="items"
                          label="Select Category"
                          multiple
                          outlined
                          class="mt-n5"
                          color="#FF2E2E"
                      ></v-combobox>
                    </v-col>
                  </v-row>
                  <v-row :style="{'justify-content': 'center'}">
                    <v-col cols="12" md="8">
                      <v-textarea
                          v-model="courseRequirements"
                          outlined
                          name="input-7-4"
                          label="Course Requirements"
                          class="mt-n5"
                          color="#FF2E2E"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row :style="{'justify-content': 'center'}">
                    <v-col cols="12" md="8">
                      <vue-editor
                          :style="{'font-family': 'IBM Plex Sans'}"
                          class="mt-n5"
                          v-model="content"
                          :editor-toolbar="customToolbar"
                      />
                    </v-col>
                  </v-row>
                  <v-row :style="{'justify-content': 'center'}">
                    <v-col cols="12" md="8">
                      <v-textarea
                          v-model="courseDescription"
                          outlined
                          name="input-7-4"
                          label="Course Description"
                          color="#FF2E2E"
                          class="mt-3"
                      ></v-textarea>
                    </v-col>
                </v-row>
                  <v-row :style="{'justify-content': 'center'}">
                    <v-col cols="12" md="8">
                      <v-combobox
                          v-model="addFacilitator"
                          :items="items"
                          label="Add Facilitator (Optional)"
                          multiple
                          outlined
                          class="mt-n5"
                          color="#FF2E2E"
                      ></v-combobox>
                    </v-col>
                  </v-row>
                  <v-row :style="{'justify-content': 'center'}">
                    <v-col cols="12" md="4">
                      <v-combobox
                          v-model="startDate"
                          :items="items"
                          label="Start Date"
                          multiple
                          outlined
                          class="mt-n5"
                          color="#FF2E2E"
                      ></v-combobox>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-combobox
                          v-model="endDate"
                          :items="items"
                          label="End Date"
                          multiple
                          outlined
                          class="mt-n5"
                      ></v-combobox>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="2" class="ma-auto" >
                    </v-col>
                    <v-col cols="12" md="8" class="ma-auto mt-n4" >
                      <v-btn
                          class="btn"
                          large
                          :style="style"
                          @click="createCourse"
                      >
                        <v-icon color="#fff">mdi-plus</v-icon>
                        Create Course</v-btn>
                    </v-col>
                    <v-col cols="12" md="2" class="ma-auto" >
                    </v-col>
                  </v-row>
                </v-card>
              </template>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="mt-5" cols="12" md="1">
        </v-col>
      </v-row>
    </div>
  </v-responsive>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: "CreateCourse",
  components: {
    VueEditor
  },
  props: {
    method: { type: Function },
  },
  data: function () {
    return {
      content: `Learning Outcomes <br>`,
      customToolbar: [
        ["bold", "italic", "underline"],
        [{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
        [{list: "ordered"}, {list: "bullet"}, 'link'],
        [{'size': ['small', false, 'large', 'huge']}],
      ],
      condition: true,
      fileSelected: null,
      courseName: '',
      courseRequirements: '',
      courseDescription: '',
      style: {'font-size': '18px', 'height': '53px', 'background': '#FF2E2E', 'color': '#FFF', 'font-weight': 'bold'},
      selectCategory: [],
      addFacilitator: [],
      startDate: [],
      endDate: [],
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
      course: {},
    };
  },
  methods: {
    handleImage(e) {
      this.fileSelected = e.target.files[0];
    },
    mounted() {
      // Pass a value to the parent through the function
      this.method(this.condition);
    },
    createCourse() {
      this.course = {
        fileSelected: this.fileSelected,
        courseName: this.courseName,
        courseRequirements: this.courseRequirements,
        learningOutcomes: this.content,
        courseDescription: this.courseDescription,
        selectCategory: this.selectCategory,
        addFacilitator: this.addFacilitator,
        startDate: this.startDate,
        endDate: this.endDate,
      };
      console.log(this.course);
    }
  },
};
</script>

<style>
@import "~vue2-editor/dist/vue2-editor.css";

.links {
  /* View All */
  font-weight: normal;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: right;
}
.card {
  background: #FFFFFF;
  border: 2px solid #F8F8F8;
  box-sizing: border-box;
  box-shadow: 0 2px 3px rgba(43, 28, 28, 0.15);
  border-radius: 15px 15px 0 0;
}
</style>