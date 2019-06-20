<template>
  <v-snackbar
    v-model="snackbarState"
    :bottom="y === 'bottom'"
    :left="x === 'left'"
    :top="y === 'top'"
    :right="x === 'right'"
    :multi-line="mode === 'multi-line'"
    :timeout="timeout"
    :vertical="mode === 'vertical'"
    :color="this.$store.state.showsnackbar.color"
  >
    {{ this.$store.state.showsnackbar.data }}
    <v-btn color="white" flat @click="close()">Close</v-btn>
  </v-snackbar>
</template>

<script>
import * as types from "./../../store/mutation-types";

export default {
  name: "Alert",
  data: () => {
    return {
      y: "top",
      x: "right",
      mode:""
    };
  },
  props: {},
  computed: {
    snackbarState: {
      get: function() {
        return this.$store.state.showsnackbar.state;
      },
      set: function() {
        setTimeout(
          function() {
            this.$store.commit(types.HIDE_SNACKBAR);
          }.bind(this),
          1000
        );
      }
    },
    timeout: function() {
      return this.$store.state.showsnackbar.time;
    }
  },
  methods: {
    close: function() {
      this.$store.commit(types.HIDE_SNACKBAR);
    }
  }
};
</script>
