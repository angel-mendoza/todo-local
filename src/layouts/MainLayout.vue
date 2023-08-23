<template>
  <NavBar />
  <main class="main-content">
    <slot></slot>
  </main>
</template>
<script setup>
import NavBar from '@/components/NavBar'
</script>
<style scoped>
.main-content {
  padding: 100px 20px 56px 20px;
  height: 100vh;
  overflow-y: auto;
}
</style>