<script setup lang="ts">
</script>

<template>
  <!-- 検索画面タイトル部分 -->
  <v-form>
    <v-container>
      <!-- タイトルの一列 -->
      <v-row 
        justify="center" 
        class="mt-16 mb-n16"
      >
        <!-- タイトルの一行 -->
        <v-col
          cols="12"
          sm="6"
          md="3"
          align="center"
          justify="center"
        >
          <h1 class="title">Qiita Search Console</h1>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>
/* タイトルのスタイル */
.title {
  color: rgb(199, 179, 66);
  font-size: 40px;
}
</style>