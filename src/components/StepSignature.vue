<template>
  <div class="step-signature" :class="active ? 'active' : ''">
    <div class="content-index">
      {{ index }}
    </div>
    <div class="content-title">
      {{ title }}
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
  index: {
    type: String,
    require: true
  },
  active: {
    type: Boolean,
    default: false
  },
})
</script>
<style scoped>
.step-signature{
  display: flex;
  gap: .8rem;
  align-items: center;
}
.content-index{
  border: 1px solid;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bs-primary);
  border-color: var(--bs-primary);
}
.step-signature.active .content-index{
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  color: var(--bs-white);
}
.step-signature.active .content-title{
  color: var(--bs-primary);
}
</style>
