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
        <new-item />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewItem from '../components/NewItem.vue';

export default {
  name: 'HomeView',

  components: {
    NewItem,
  },
};
</script>
