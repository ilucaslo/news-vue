<template>
  <v-container>
    <v-row class="my-5">
        <v-col cols="auto">
          <v-card class="my-3">
            <v-img :src="article.urlToImage"
            ></v-img>
            <v-card-actions class="my-3">
              <v-row>
                <v-col cols="auto">
                  <v-chip
                    v-if="article.author"
                    class="ma-2"
                    color="primary"
                    label
                    outlined
                  >
                    <v-icon left>
                      mdi-account-circle-outline
                    </v-icon>
                    {{ article.author }}
                  </v-chip>
                </v-col>
                <v-col cols="auto">
                  <v-chip
                    class="ma-2"
                    color="primary"
                    label
                    outlined
                  >
                    <v-icon left>
                      mdi-calendar-range
                    </v-icon>
                    {{ article.publishedAt | formatDate }}
                  </v-chip>
                </v-col>
                <v-col cols="auto"
                  style="align-self:center;">
                  <v-chip small color="primary"
                    class="white--text"
                    outlined>
                    {{ article.source.name }}
                  </v-chip>
              </v-col>
          </v-row>
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
        </v-col>
      </v-row>
  </v-container>
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
    this.addHeadlineToHistory({ title: this.article.title });
  },

  methods: {
    ...mapMutations(['addHeadlineToHistory']),
  },
};
</script>
