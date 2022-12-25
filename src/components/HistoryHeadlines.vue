<template>
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          History
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="justify-center">Your headlines history</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height:400px;">
          <ol class="pt-5">
            <li v-for="headline, index in headlinesHistory"
              :key="index" class="pt-5">
                <span>{{ headline.title }}</span>
            </li>
          </ol>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="clearHeadlinesHistory"
          >
            Clear history
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'HistoryHeadlines',

  data: () => ({
    dialog: false,
  }),

  computed: {
    ...mapState(['headlinesHistory']),
  },

  methods: {
    ...mapMutations(['clearHeadlinesHistory']),
  },
};
</script>
