<template>
    <div class="text-center">
      <v-btn
        class="white--text"
        color="error"
        @click.stop="testErrorCall"
      >
        Test error
      </v-btn>
      <v-dialog
        v-model="dialog"
        persistent
        width="500"
      >
      <v-alert
        v-model="dialog"
        prominent
        dismissible
        type="error"
        icon="mdi-cloud-alert"
        >
        Upss... It seems our servers are not responding right now, please try later.
        </v-alert>
      </v-dialog>
    </div>
  </template>

<script>
export default {
  name: 'TestError',

  data: () => ({
    dialog: false,
  }),

  methods: {
    async testErrorCall() {
      const res = await fetch('https://newsapi.org/v2/sources?apiKey');
      if (!res.ok) {
        this.dialog = true;
        const message = `An error occured: ${res.status}`;
        throw new Error(message);
      }
    },
  },
};
</script>
