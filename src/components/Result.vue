<script setup lang="ts">
import { ref } from 'vue';
import { loading, data, resultsExplanation, isResults } from './OptionStates';
</script>

<template>
  <v-card
    class="mx-auto"
  >
    <!-- header -->
    <v-toolbar
      color="success"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Qiita Search</v-toolbar-title>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <div v-if="!isResults">
      {{ resultsExplanation }}
    </div>
    <div v-else>
      <!-- results in itself -->
      <v-list three-line
        class="mx-auto"
        max-width="1000"
      >
        <template 
          v-for="item in data" 
          :key="item.title" 
        >
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="item.user.profile_image_url" class="img rounded-circle d-inline-block"></v-img>
            </v-list-item-avatar>
            <v-list-item-content class="ml-10">
              <v-list-item-title>
                <a :href="item.url" class="title">
                  {{ item.title }}
                </a>
              </v-list-item-title>
              <div class="tags">
                <div 
                  v-for="tag in item.tags" 
                  :key="tag.name"
                  
                >
                  <v-list-item-subtitle >
                    <v-btn
                      rounded
                      x-small
                      color="success"
                      dark
                      class="button"
                    >
                      {{ tag.name }}
                    </v-btn>
                  </v-list-item-subtitle>
                </div>
              </div>
              
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </div>
  </v-card>
</template>

<style scoped>
.img {
  width: 5vh;
  height: 5vh;
}
.button {
  font-size: 10px;
  height: 15px;
  padding: 1vh;
  
}
.title {
  color:green;
}
.tags {
  display: flex;
}
</style>