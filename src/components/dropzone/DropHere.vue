<template>
  <div class="card-drop" :class="dragActive ? 'active' : ''">
    <img src="@/assets/image/upload.png" alt="upload-icon" />
    <p>Arrastra y suelta tus documentos aquí o <span role="button" class="text-primary" @click="onFindFile">Buscar Archivo</span></p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  onFindFile: {
    type: Function,
    require: true
  },
  dragActive: {
    type: Boolean,
    default: false
  }
})
</script>
<style scoped>

.card-drop.active{
opacity: .5;
}
.card-drop{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
.card-drop p {
  font-size: small;
}
</style>