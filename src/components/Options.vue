<script setup lang="ts">

</script>

<template>
  <div class="text-center">
    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      1st Option
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
        <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      2nd Option
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
        <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      3rd Option
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
  </div>
</template>

<style scoped>
</style>