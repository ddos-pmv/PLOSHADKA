<script setup>
import Header from './components/Header.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeDescription from './components/HomeDesccription.vue'
</script>

<template>
  <Header></Header>
  <main class="vue-main">
    <RouterView />
  </main>
</template>

<style scoped>
.vue-main {
  width: 100%;
  min-height: 100px;
}
</style>
