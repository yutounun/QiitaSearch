<script setup lang="ts">
import { ref } from 'vue';
import { 
  onIncludingTitle,
  onNotIncludingTitle,
  onIncludingBody,
} from './OptionStates';

</script>

<template>
  <div class="text-center">
    <v-btn
      :loading="isIncludingTitle"
      class="ma-3 px-10"
      color="success"
      @click="onIncludingTitle()"
    >
      TITLE
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
    <v-btn
      class="ma-3 px-9"
      :loading="isNotIncludingTitle"
      color="success"
      @click="onNotIncludingTitle()"
    >
      -TITLE
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
    <v-btn
      class="ma-3 px-8"
      :loading="isIncludingBody"
      color="success"
      @click="onIncludingBody()"
    >
      BODY
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
  </div>
</template>

<style scoped>
</style>