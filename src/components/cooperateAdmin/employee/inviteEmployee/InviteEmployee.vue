<template>
  <v-card class="mx-auto mt-4" width="500" rounded>
    <validationObserver>
      <v-form>
        <v-card-title class="text-center justify-center">
          <h3>Invite Employees</h3>
        </v-card-title>
        <v-file-input
          v-model="files"
          accept=".csv, .xlsx"
          class="pt-8 px-6"
          label="Upload CSV Document"
          multiple
          filled
          prepend-inner-icon="mdi-cloud-upload"
          prepend-icon
        >
          <template v-slot:selection="{ text }">
            <v-chip small label color="primary">{{ text }}</v-chip>
          </template>
        </v-file-input>

        <h3 class="text-center pt-8">OR</h3>

        <p class="text-center pt-8">Manually input Employees Email</p>
        <ValidationProvider rules="required|email">
          <v-combobox
            class="px-6"
            v-model="model"
            :filter="filter"
            :hide-no-data="!search"
            :search-input.sync="search"
            hide-selected
            label="Email Address"
            multiple
            small-chips
            solo
            :loading="load"
          >
            <template v-slot:no-data>
              <v-list-item>
                <span class="subheading">Create</span>
                <v-chip :color="`red lighten-3`" label small>{{
                  search
                }}</v-chip>
              </v-list-item>
            </template>
            <template v-slot:selection="{ attrs, item, parent, selected }">
              <v-chip
                v-if="item === Object(item)"
                v-bind="attrs"
                :color="`red lighten-3`"
                :input-value="selected"
                label
                small
              >
                <span class="pr-2">{{ item.text }}</span>
                <v-icon small @click="parent.selectItem(item)"
                  >mdi-close</v-icon
                >
              </v-chip>
            </template>
            <template v-slot:item="{ index, item }">
              <v-text-field
                v-if="editing === item"
                v-model="editing.text"
                height="60"
                autofocus
                flat
                background-color="transparent"
                hide-details
                solo
                @keyup.enter="edit(index, item)"
              ></v-text-field>
              <v-chip
                v-else
                :color="`${item.color} lighten-3`"
                dark
                label
                small
                >{{ item.text }}</v-chip
              >
              <v-spacer></v-spacer>
              <v-list-item-action @click.stop>
                <v-btn icon @click.stop.prevent="edit(index, item)">
                  <v-icon>{{
                    editing !== item ? "mdi-pencil" : "mdi-check"
                  }}</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-combobox>
        </ValidationProvider>
      </v-form>

      <v-btn
        color="#FF2E2E"
        dark
        width="400"
        height="60"
        class="my-8 ml-12"
        @click.prevent="inviteEmployee"
        >Send Invite(s)</v-btn
      >
    </validationObserver>
  </v-card>
</template>

<script>
import UserService from "../../../../services/user-services";
export default {
  data: () => ({
    files: [],
    activator: null,
    value: "",
    attach: null,
    colors: ["green", "purple", "indigo", "cyan", "teal", "orange"],
    editing: null,
    index: -1,
    load: false,
    items: [
      { header: "Select an option or create one" },
      {
        text: "Foo",
        color: "blue"
      },
      {
        text: "Bar",
        color: "red"
      }
    ],
    nonce: 1,
    menu: false,
    model: [],
    x: 0,
    search: null,
    y: 0
  }),

  watch: {
    model(val, prev) {
      if (val.length === prev.length) return;

      this.model = val.map(v => {
        if (typeof v === "string") {
          v = {
            text: v,
            color: this.colors[this.nonce - 1]
          };

          this.items.push(v);

          this.nonce++;
        }

        return v;
      });
    }
  },

  methods: {
    edit(index, item) {
      if (!this.editing) {
        this.editing = item;
        this.index = index;
      } else {
        this.editing = null;
        this.index = -1;
      }
    },
    filter(item, queryText, itemText) {
      if (item.header) return false;

      const hasValue = val => (val != null ? val : "");

      const text = hasValue(itemText);
      const query = hasValue(queryText);

      return (
        text
          .toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      );
    },
    inviteEmployee() {
      this.load = true;
      const data = { emails: this.model };

      UserService.inviteEmployee(data, this.files)
        .then(res => {
          console.log(res.data);
          this.load = false;
          this.$emit("showSplash");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
