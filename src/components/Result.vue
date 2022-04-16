<script setup lang="ts">
import { ref } from 'vue';
import { loading, focusInput, data, onSearch, isIncludingTitle, isNotIncludingTitle, isIncludingBody, isIncludingCreated, isIncludingUpdated, searchKeyword } from './OptionStates';
</script>

<template>
  <v-row>
    <ul>
      <li v-for="li in data" :key="li.id">
        <a :href="li.url">{{ li.title }}</a>
      </li>
    </ul>
  </v-row>
  <v-row>
    {{ loading }}
  </v-row>
</template>

<style scoped>
</style>