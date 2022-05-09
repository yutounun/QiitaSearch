<script setup lang="ts">
import Home from './Home.vue'
import Result from './Result.vue'
import { showResult } from './Search';
</script>

<template>
  <!-- 検索実行前 -->
  <div v-if="!showResult">
    <!-- 検索ページを表示 -->
    <Home />
  </div>
  <!-- 検索実行後 -->
  <div v-else>
    <!-- 検索結果ページを表示 -->
    <Result />
  </div>
</template>

<style>
</style>
