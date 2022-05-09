<script setup lang="ts">
import { ref } from 'vue';
import { loading, focusInput, data, onSearch, isIncludingTitle, isNotIncludingTitle, isIncludingBody, searchKeyword } from './OptionStates';
</script>

<template>
  <v-form>
    <v-container>
      <!-- 検索窓一列 -->
      <v-row
        class="blue lighten-4" 
        style="height: 30vh;"
        justify="center" 
        align-content="center"
      >
        <!-- 検索窓一行 -->
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-row>
            <v-text-field
              label="search on Qiita"
              variant="contained"
              class="px-50"
              v-model="searchKeyword"
              v-on:keydown.enter="onSearch()"
            ></v-text-field>
            <v-btn
              icon="mdi-magnify"
              color="success"
              @click="onSearch"
              class="ml-5"
            ></v-btn>
          </v-row>
          <v-row>
            {{ loading }}
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>
</style>