<template>
  <v-card class="mx-auto my-16" width="500" rounded>
    <validationObserver>
      <v-form>
        <v-card-title class="text-center justify-center">
          <h3>Invite Employees</h3>
        </v-card-title>

        <v-file-input
          label="Upload CSV Document"
          filled
          prepend-icon="mdi-cloud-upload"
          class="pt-8 px-6"
        ></v-file-input>
        <h3 class="text-center pt-8">OR</h3>

        <p class="text-center pt-8">Manually input Employees Email</p>
        <ValidationProvider rules="required|email">
          <v-combobox
            class="px-6"
            v-model="model"
            :filter="filter"
            :hide-no-data="!search"
            :items="items"
            :search-input.sync="search"
            hide-selected
            label="Search for an option"
            multiple
            small-chips
            solo
            :loading="load"
          >
            <template v-slot:no-data>
              <v-list-item>
                <span class="subheading">Create</span>
                <v-chip :color="`red lighten-3`" label small>{{ search }}</v-chip>
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
                <v-icon small @click="parent.selectItem(item)">close</v-icon>
              </v-chip>
            </template>
            <template v-slot:item="{ index, item }">
              <v-text-field
                v-if="editing === item"
                v-model="editing.text"
                autofocus
                flat
                background-color="transparent"
                hide-details
                solo
                @keyup.enter="edit(index, item)"
              ></v-text-field>
              <v-chip v-else :color="`${item.color} lighten-3`" dark label small>{{ item.text }}</v-chip>
              <v-spacer></v-spacer>
              <v-list-item-action @click.stop>
                <v-btn icon @click.stop.prevent="edit(index, item)">
                  <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-combobox>
        </ValidationProvider>
      </v-form>

      <v-btn
        color="#FF2E2E"
        dark
        width="300"
        height="50"
        class="my-8 ml-6"
        @click.prevent="inviteEmployee"
      >Send Invite</v-btn>
    </validationObserver>
  </v-card>
</template>

  </v-card>
</template>

<script>
import UserService from "../../../../services/user-services";
export default {
  data: () => ({
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
      const data = { email: this.model };

      UserService.inviteEmployee(data)
        .then(res => {
          console.log(res.data);

          this.load = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>