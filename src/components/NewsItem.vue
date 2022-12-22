<template>
    <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px"
          :src="imgUrl || require('@/assets/card-default.svg')">
            <v-card-title>{{ title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
            {{ date }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
            <div>{{ description }}</div>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
  name: 'NewsItem',

  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
  },

  data: () => ({
    //
  }),
};
</script>
