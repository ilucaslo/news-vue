<template>
  <v-container
    class="grey lighten-5"
    fluid>
    <v-row>
      <v-col>
        <h2>Headlines</h2>
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
    <v-row>
      <v-col
        v-for="n in 12"
        :key="n"
        cols="auto"
        xs="1"
        sm="4"
        md="3"
        lg="3"
      >
        <news-item />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsItem from '../components/NewsItem.vue';

export default {
  name: 'ListView',

  components: {
    NewsItem,
  },

  data() {
    return {
      articles: [],
    };
  },

  created() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e')
      .then((response) => response.json())
      .then((data) => { this.articles = data.articles; });
  },
};
</script>
