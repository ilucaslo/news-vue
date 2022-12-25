<template functional>
    <v-card-actions>
      <v-row>
        <v-col cols="auto">
            <v-btn
                color="primary"
                text
                @click="listeners['onMoreClicked']"
                >
                More
            </v-btn>
        </v-col>
        <v-col cols="auto">
            <v-btn
                color="primary"
                text
                @click="listeners['onEditTitleClicked']"
                >
                Edit title
            </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
</template>

<script>
export default {
  name: 'HeadlineActions',
};
</script>
