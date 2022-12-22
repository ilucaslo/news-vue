import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
  },
  getters: {
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    async fetchArticles() {
      const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e');
      const data = await res.json();
      this.commit('setArticles', data.articles);
    },
  },
  modules: {
  },
});
