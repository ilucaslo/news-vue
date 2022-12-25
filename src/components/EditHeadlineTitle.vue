<template>
    <v-dialog
      max-width="500px"
      v-model="show"
    >
      <v-card>
        <v-card-title class="justify-center">Edit title</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height:100px;">
            <v-text-field
                v-model="title"
                placeholder="New title"
                :maxlength="255"
            ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click.stop="show=false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click.stop="editTitle"
          >
            Save title
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'EditHeadlineTitle',

  props: {
    value: {
      type: Boolean,
    },
    articleIndex: {
      type: Number,
    },
  },

  data: () => ({
    dialog: false,
    title: '',
  }),

  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },

  methods: {
    ...mapMutations(['editArticleTitle']),

    editTitle() {
      this.editArticleTitle({ articleIndex: this.articleIndex, title: this.title });
      this.show = false;
    },
  },
};
</script>
