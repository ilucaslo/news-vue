<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title class="title ps-11" @click="NavigateToHome">News App</v-toolbar-title>
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
  opacity: .8;
  cursor: pointer;
  transition: .3s;
}
</style>
