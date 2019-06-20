<template>
  <div class="lazy__model">
    <v-dialog
      v-model="this.$store.state.showCreateFolderModal"
      persistent
      dark
      width="500px"
      transition="fade-transition"
    >
      <!-- <media-rename-model></media-rename-model> -->
      <!-- <media-confirm-delete-model></media-confirm-delete-model> -->
      <media-create-folder-model v-if="this.$store.state.showCreateFolderModal"></media-create-folder-model>
      <!-- <media-preview-model></media-preview-model> -->
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "media-model",
  computed: {
    isActivePreview() {
      return this.$store.state.showPreviewModal;
    }
  }
};
</script>
