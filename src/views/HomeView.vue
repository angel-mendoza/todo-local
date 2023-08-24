<template>
  <div class="container">
    <div class="row">
      <div class="col-12 hide-movil mb-3">
        <div class="card">
          <div class="card-body d-flex justify-content-around align-items-center">
            <h5 class="card-title m-0">Firmar nuevo documento</h5>
            <StepSignature :active="true" index="1" title="Cargar documento" />
            <StepSignature index="2" title="Indicar firmantes" />
            <StepSignature index="3" title="Personalizaciones Opcionales" />
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 mb-3">
        <HowDoesItWork />
      </div>
      <div class="col-md-6 col-12 mb-3">
        <div class="card h-100">
          <div class="card-body section-form">
            <div>
              <h6 class="m-0"><font-awesome-icon  icon="fa-solid fa-chevron-left" /> Carga de Documentos</h6>
              <p>Sube tus documentos y ordenalos <font-awesome-icon  icon="fa-solid fa-circle-question" /></p>
            </div>
            <UploadForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import StepSignature from '@/components/StepSignature'
import HowDoesItWork from '@/components/HowDoesItWork'
import UploadForm from '@/components/UploadForm'
</script>
<style scoped>
.section-form{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
}
</style>