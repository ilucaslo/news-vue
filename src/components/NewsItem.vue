<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px"
          :src="imgUrl || require('@/assets/card-default.svg')">
            <v-card-title class="title">{{ title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
            {{ date | formatDate }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
            <div>{{ description }}</div>
        </v-card-text>
        <headline-actions
          @onMoreClicked="navigateToDetail"
          @onEditTitleClicked="onEditTitleClicked"
         />
    </v-card>
    <edit-headline-title
      v-model="showEditTitleDialog"
      :articleIndex="articleIndex" />
  </v-container>
</template>

<script>
import HeadlineActions from '@/components/HeadlineActions.vue';
import EditHeadlineTitle from '@/components/EditHeadlineTitle.vue';

export default {
  name: 'NewsItem',

  components: {
    HeadlineActions,
    EditHeadlineTitle,
  },

  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    articleIndex: {
      type: Number,
    },
  },

  data: () => ({
    showEditTitleDialog: false,
  }),

  methods: {
    onEditTitleClicked() {
      this.showEditTitleDialog = true;
    },
    navigateToDetail() {
      this.$router.push({ name: 'detail', params: { articleIndex: this.articleIndex } });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
</style>
