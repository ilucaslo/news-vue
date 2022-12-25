import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    sources: [],
    headlinesHistory: [],
  },
  getters: {
    articleByIndex: (state) => (index) => state.articles[index],
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    },
    setSources(state, sources) {
      state.sources = sources;
    },
    addHeadlineToHistory(state, headline) {
      state.headlinesHistory.unshift(headline);
    },
    clearHeadlinesHistory(state) {
      state.headlinesHistory = [];
    },
    editArticleTitle(state, titleInfo) {
      state.articles[titleInfo.articleIndex].title = titleInfo.title;
    },
  },
  actions: {
    async fetchTopArticles({ commit }) {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`);
      if (!res.ok) {
        this.dialog = true;
        const message = `An error occured: ${res.status}`;
        throw new Error(message);
      } else {
        const data = await res.json();
        commit('setArticles', data.articles);
      }
    },
    async fetchSources({ commit }) {
      const res = await fetch(`https://newsapi.org/v2/sources?apiKey=${process.env.VUE_APP_NEWS_API_KEY}`);
      if (!res.ok) {
        this.dialog = true;
        const message = `An error occured: ${res.status}`;
        throw new Error(message);
      } else {
        const data = await res.json();
        commit('setSources', data.sources);
      }
    },
    async searchArticles({ commit }, searchText) {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?q=${searchText}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`);
      if (!res.ok) {
        this.dialog = true;
        const message = `An error occured: ${res.status}`;
        throw new Error(message);
      } else {
        const data = await res.json();
        commit('setArticles', data.articles);
      }
    },
  },
});
