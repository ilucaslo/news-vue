<template>
  <v-layout row wrap align-center>
      <v-flex xs8  offset-md2>
        <div class="article">
          <v-card class="my-3">
            <v-img :src="article.urlToImage"
            ></v-img>
            <v-card-actions>
              <v-chip
                class="ma-2"
                color="primary"
                label
              >
                <v-icon left>
                  mdi-account-circle-outline
                </v-icon>
                {{ article.author }}
              </v-chip>
              <v-chip
                class="ma-2"
                color="primary"
                label
              >
                <v-icon left>
                  mdi-calendar-range
                </v-icon>
                {{ article.publishedAt }}
              </v-chip>
              <v-chip small color="primary" class="white--text">
                {{ article.source.name }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-btn small replace color="info"
                :href="article.url" target="_blank" >Read More</v-btn>
            </v-card-actions>
              <v-container fill-height fluid>
                <v-layout>
                  <v-flex xs12 align-end d-flex>
                    <span class="headline">{{ article.title }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            <v-divider></v-divider>
            <v-card-text>
              {{ article.description }}
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'DetailView',

  components: {
  },

  data() {
    return {
    };
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
    // Redirect to Home if we dont have data stored
      if (!vm.article) {
        next({ name: 'home' });
      } else {
        next();
      }
    });
  },

  computed: {
    ...mapGetters(['articleByIndex']),

    article() {
      return this.articleByIndex(this.articleIndex);
    },
    articleIndex() {
      return this.$route.params.articleIndex;
    },
  },

  mounted() {
    this.addHeadlineToHistory({ title: this.article.title, articleIndex: this.articleIndex });
  },

  methods: {
    ...mapMutations(['addHeadlineToHistory']),
  },
};
</script>
