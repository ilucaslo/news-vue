<template>
  <v-hover v-slot="{ hover }">
    <v-card class="mx-auto" max-width="400" :class="{ 'on-hover': hover }"
      @click="cardClicked">
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
  </v-hover>
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

  methods: {
    cardClicked() {
      this.$emit('onCardClicked');
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card.on-hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.4);
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
