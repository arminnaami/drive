<template>
  <v-card>
    <v-card-title>
      New Folder
      <v-spacer></v-spacer>
      <v-icon>folder</v-icon>
    </v-card-title>
    <v-container>
      <v-flex>
        <v-text-field
          @focus="$event.target.select()"
          v-model="defaultData"
          box
          full-width
          single-line
          label="Folder name"
          :rules="emailRules"
          autocomplete="false"
          background-color="#dcdada"
          color="grey darken-2"
          outline
          autofocus
        ></v-text-field>
      </v-flex>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn depressed color="error" @click="hideCreateFolderModal()">Cancel</v-btn>
      <v-btn depressed color="success" @click="create()">Create</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import * as types from "./../../../store/mutation-types";

export default {
  name: "media-create-folder",
  data: () => ({
    defaultData: "Untitled Folder"
  }),

  methods: {
    hideCreateFolderModal: function() {
      this.$store.commit(types.HIDE_CREATE_FOLDER_MODAL);
    },
    create: function() {
      const foldername = this.defaultData;
      this.$store.dispatch("createDirectory", { foldername });
    }
  }
};
</script>
<style>
.confirm-text {
  text-align: left;
  font-size: 20px;
}
</style>
