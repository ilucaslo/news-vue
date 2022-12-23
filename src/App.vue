<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title class="title" @click="NavigateToHome">News</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    NavigateToHome() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="scss" scoped>
.title:hover {
  transform: scale(1.2);
  cursor: pointer;
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
