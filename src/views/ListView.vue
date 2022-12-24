<template>
  <v-container
    class="grey lighten-5 px-16 py-8"
    fluid>
    <v-row>
      <v-col cols="auto" class="mr-6">
        <h2>Top Headlines</h2>
      </v-col>
      <v-col cols="auto">
        <v-text-field
          v-model="searchValue"
          class="ma-0 pa-0"
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          @keydown="onSearchType"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-row class="align-center justify-end">
      <v-col cols="auto">
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
    </v-row>
    <v-row v-if="!isLoading && noArticles">
      <h3> No results for: {{ searchValue }}</h3>
    </v-row>
    <v-row v-else class="py-7">
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
      searchValue: '',
    };
  },

  computed: {
    ...mapState(['articles', 'sources']),

    noArticles() {
      return this.articles && this.articles.length === 0;
    },
  },

  methods: {
    ...mapActions(['fetchTopArticles', 'fetchSources', 'searchArticles']),

    async onCreate() {
      await this.fetchTopArticles();
      // await this.fetchSources();
    },
    navigateToDetail(articleIndex) {
      this.$router.push({ name: 'detail', params: { articleIndex } });
    },
    async onSearchType() {
      this.isLoading = true;
      if (this.searchValue !== '') {
        await this.searchArticles(this.searchValue);
      } else {
        this.onCreate();
      }
      this.isLoading = false;
    },
  },

  async created() {
    // Don't fetch new data if we already made an API call
    if (this.noArticles) {
      this.isLoading = true;
      await this.onCreate();
      this.isLoading = false;
    }
  },
};
</script>
