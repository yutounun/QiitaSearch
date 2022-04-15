<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

type axiosParams = {
  page: number,
  per_page: number,
  query: string
}
const searchKeyword = ref<any>()
const data = ref()
const isLoading = ref(false)
const isOption1 = ref<boolean>(true)

const onSearch = () => {
  // show loading icon
  isLoading.value = true
  // if isOption1 has been clicked
  if (isOption1){
    searchKeyword.value = 'title:' + searchKeyword.value
  }
  
  const params: axiosParams = { 
    page: 3,
    per_page: 20,
    query: searchKeyword.value
  };
  // var params = {page: 1, per_page: 20, query: 'js'};

  // Call an API using axios
  axios.get('https://qiita.com/api/v2/items', {params})
    .then(function(res){
        // make sure if you get data from Qiita
        console.log(res)
        data.value = res.data
    })
    // Watch errors
    .catch(function(error){
      console.log('Error!' + error)
    })
    // Once HTTP request end, loading icon will be hidden
    .finally(function(){
      isLoading.value = false
    })
  searchKeyword.value = []
}
</script>

<template>
  <v-form>
    <v-container>
      <v-row
        class="blue lighten-4" style="height: 30vh;"
        justify="center" align-content="center"
      >
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
            ></v-text-field>
            <v-icon 
              style="vertical-align: middle"
              @click="onSearch"
            >
              mdi-file-find
            </v-icon>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <ul>
          <li v-for="li in data">{{ li.title }}</li>
        </ul>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>
</style>