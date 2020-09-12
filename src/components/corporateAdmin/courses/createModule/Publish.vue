<template>
  <v-container>
    <v-responsive>

      <v-card class="ma-4">
        <v-container  >

          <h3 class="ma-4 " style="padding-top: 5%">Publish Settings</h3>
          <v-text-field
              v-model="model"
              :items="items"
              label="Course Name"
              multiple
              outlined
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
          <section  class="ma-4 checkbox">
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
          <v-card-actions>
            <v-btn
                class="ma-4"
                @click="saveCourse"
                style="background-color: #FF2E2E; color: #F8F8F8; height: 50px !important; width: 120px !important;"
            >Save</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "Publish",

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
  width: 60%;
  margin-left: 2%;
  margin-top: 5%;
}
.checkbox{
  padding-top: 50px;
  padding-bottom: 70px;
}
</style>
