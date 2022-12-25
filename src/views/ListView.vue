<template>
  <v-container
    class="grey lighten-5 px-16 py-8"
    fluid>
    <v-row>
      <v-col cols="auto" class="mr-12">
        <h2>Top Headlines</h2>
      </v-col>
      <v-col cols="auto">
        <v-text-field
          v-model="searchValue"
          class="ma-0 pa-0"
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          @input="onSearchType"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-row class="align-center justify-end">
      <v-col cols="auto">
        <history-headlines />
      </v-col>
      <v-col cols="auto">
        <test-error />
      </v-col>
    </v-row>
    </v-row>
    <v-row>
      <v-col
        class="d-flex"
        cols="auto"
      >
        <v-select
          :items="sources"
          label="Filter by source"
          dense
          outlined
          @change="updateSourceFilter"
        ></v-select>
      </v-col>
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
        v-for="article in filteredArticles"
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
          :articleIndex="indexByUrl(article.url)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NewsItem from '@/components/NewsItem.vue';
import Spinner from '@/components/Spinner.vue';
import HistoryHeadlines from '@/components/HistoryHeadlines.vue';
import TestError from '@/components/TestError.vue';

export default {
  name: 'ListView',

  components: {
    NewsItem,
    Spinner,
    HistoryHeadlines,
    TestError,
  },

  data() {
    return {
      isLoading: false,
      searchValue: '',
      sourceFilter: '',
    };
  },

  computed: {
    ...mapState(['articles']),

    noArticles() {
      return this.articles && this.articles.length === 0;
    },
    sources() {
      const sources = this.articles.map((article) => article.source.name);
      sources.unshift('All');
      // Remove duplicated ones
      return [...new Set(sources)];
    },
    filteredArticles() {
      if (this.sourceFilter !== '' && this.sourceFilter !== 'All') {
        return this.articles.filter((article) => article.source.name === this.sourceFilter);
      }
      return this.articles;
    },
  },

  methods: {
    ...mapActions(['fetchTopArticles', 'fetchSources', 'searchArticles']),

    updateSourceFilter(source) {
      this.sourceFilter = source;
    },
    indexByUrl(url) {
      return this.articles.findIndex((article) => article.url === url);
    },

    async onCreate() {
      await this.fetchTopArticles();
      // READ: I don't see the point of using the API to fectch all the sources
      // to filter my current headlines since I'll get too many sources I don't need
      // instead using the sources from my current headlines to filter them
      // this way I will have results for every  filter

      // await this.fetchSources();
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
