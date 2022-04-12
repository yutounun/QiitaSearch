<script setup lang="ts">
import { ref } from 'vue';

const test = () => {
  confirm('test')
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
            ></v-text-field>
            <v-icon 
              style="vertical-align: middle"
              @click="test"
            >
              mdi-file-find
            </v-icon>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>
</style>