<script setup lang="ts">
import Title from './Title.vue'
import SearchWindow from './SearchWindow.vue'
import Options from './Options.vue'
import Result from './Result.vue'
import { showResult } from './Search';
</script>

<template>
  <div v-if="!showResult">
    <Title />
    <SearchWindow />
    <Options />
    {{ showResult }}
  </div>
  <div v-else>
    <Result />
  </div>
</template>

<style>
</style>
