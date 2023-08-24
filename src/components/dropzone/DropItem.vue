<template>
  <div class="card">
    <div class="card-body">
      <div class="item-bars">
        <font-awesome-icon  icon="fa-solid fa-bars" />
      </div>
      <div class="item-title">
        {{ title }}
      </div>
      <div class="item-deleted" @click="onDelete(title)">
        <img src="@/assets/image/trash.png" alt="upload-icon" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    require: true
  },
  onDelete: {
    type: Function,
    require: true
  }
})
</script>
<style scoped>
.card{
  margin-bottom: 10px;
}
.card-body{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 16px;
}

.item-bars{
  padding-right: 16px;
  border-right: 1px solid var(--bs-gray-300);
}
.item-deleted{
  padding-left: 16px;
  border-left: 1px solid var(--bs-gray-300);
  cursor: pointer;
}
.item-deleted img{
  width: 1.1rem;
}

.item-title{
  color: var(--bs-gray-600);
  padding: 0 10px;
  overflow: hidden; /* Oculta el contenido que exceda el ancho del div */
  white-space: nowrap; /* Evita que el texto se divida en múltiples líneas */
  text-overflow: ellipsis; /* Agrega puntos suspensivos al final del texto si se corta */
}
</style>