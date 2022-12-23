<template>
  <v-container
    class="grey lighten-5 px-15 py-4"
    fluid>
    <v-row>
      <v-col>
        <h2>Top Headlines</h2>
      </v-col>
      <v-col cols="auto" class="ma-auto">
        <history-headlines />
      </v-col>
      <v-col cols="auto">
        <v-btn
        depressed
        color="primary"
        >
          Filter
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="py-4">
      <v-col v-if="isLoading">
        <spinner text="Loading headlines..." />
      </v-col>
      <v-col
        v-else
        v-for="article, index in articles"
        :key="article.url"
        cols="auto"
        xs="1"
        sm="4"
        md="3"
        lg="3"
      >
        <news-item
          :title="article.title"
          :description="article.description"
          :date="article.publishedAt"
          :imgUrl="article.urlToImage"
          @onCardClicked="navigateToDetail(index)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NewsItem from '../components/NewsItem.vue';
import Spinner from '../components/Spinner.vue';
import HistoryHeadlines from '../components/HistoryHeadlines.vue';

export default {
  name: 'ListView',

  components: {
    NewsItem,
    Spinner,
    HistoryHeadlines,
  },

  data() {
    return {
      isLoading: false,
    };
  },

  computed: {
    ...mapState(['articles', 'sources']),
  },

  methods: {
    ...mapActions(['fetchArticles', 'fetchSources']),

    async onCreate() {
      await this.fetchArticles();
      // await this.fetchSources();
    },
    navigateToDetail(articleIndex) {
      this.$router.push({ name: 'detail', params: { articleIndex } });
    },
  },

  async created() {
    // Don't fetch new data if we already made an API call
    if (this.articles.length === 0) {
      this.isLoading = true;
      await this.onCreate();
      this.isLoading = false;
    }
    // console.log('sources', this.sources);
  },
};
</script>
