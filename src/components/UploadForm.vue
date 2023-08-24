<template>
  <div class="form-body">
    <div class="card-drop-content">
      <div v-bind="getRootProps()">
        <input ref="inputFile" v-bind="getInputProps()">
        <div v-if="listFiles.length <= 0">
          <DropHere :drag-active="isDragActive" :on-find-file="handleOnFindFile"/>
        </div>
      </div>
      <div v-if="listFiles.length > 0">
        <DropItem
          v-for="(file, index) in listFiles" :key="index"
          :title="file.path"
          :on-delete="handleDelete"
        />
        <DropAddItem @click="open" />
      </div>
    </div>
    <p class="error-message text-danger">Solo se admite archivos en formato PDF</p>
    <div v-if="listError.length > 0" class="mt-2">
      <p v-for="(item, index) in listError" :key="index" class="text-danger error-message">{{ item }}</p>
    </div>
  </div>
  <div class="submit-section text-center">
    <button
      v-if="listFiles.length > 0"
      type="button"
      class="btn btn-lg btn-light text-primary btn-back"
      :class="listFiles.length > 0 ? 'w-50' : ''"
      @click="resetForm"
    >
      Regresar
    </button>
    <button
      type="button"
      class="btn btn-lg btn-primary"
      :class="listFiles.length > 0 ? 'w-50' : 'w-100'"
      @click="sendWebhookRequest"
    >
      Siguiente
    </button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useDropzone } from 'vue3-dropzone'
import api from '@/utils/axios'
import DropHere from '@/components/dropzone/DropHere'
import DropItem from '@/components/dropzone/DropItem'
import DropAddItem from '@/components/dropzone/DropAddItem'

/*********** state **********/
const inputFile = ref(null)
const listFiles = ref([])
const listError = ref([])

/*********** functions **********/
const resetForm = () => {
  listFiles.value = []
  listError.value = []
}

const fetchIPAddress = async () => {
  const response = await api.get(process.env.VUE_APP_BASE_URL_IP)
  return response.data.ip
}

const sendWebhookRequest = async () => {
  if (listFiles.value.length > 0) {
    const name = process.env.VUE_APP_USER
    const currentDate = new Date().toLocaleDateString()
    const ipAddress = await fetchIPAddress()

    const webhookData = {
      name,
      currentDate,
      ipAddress,
    }

    api.post( process.env.VUE_APP_BASE_URL_WEBHOOK, webhookData,).then(data => {
      console.log('data :>> ', data)
    }).catch(error => {
      console.error(error)
    })
  } else {
    listError.value = ['Debes cargar por lo menos un archivo']
  }
}

const validateMaxFile = (files) => {
  if ((files.length + listFiles.value.length) > 5) {
    listError.value.push('No se puede cargar más de 5 archivos')
    return false
  }
  return true
}

const onDrop = (acceptedFiles) => {
  const flagValidate = validateMaxFile(acceptedFiles)
  if (flagValidate) {
    acceptedFiles.map(file => {
      listError.value = []
      // convertir el tamaño de los archivos para poder validar que no sea mayor a 20mb
      let fileSize = file.size
      let convertSize = (fileSize / 1024 / 1024).toFixed(2)
      if (convertSize > 20) {
        listError.value.push(`El archivo ${file.path} excede el tamaño permitido`)
      } else {
        listFiles.value.push(file)

      }
    })
  }
}

const handleOnFindFile = () => {
  inputFile.value.click()
}

const handleDelete = (value) => {
  const listFilter = listFiles.value.filter(file => file.path !== value)
  listFiles.value = listFilter
}

const options = reactive({
  multiple: true,
  onDrop,
  accept: '.pdf',
})

const {
  getRootProps,
  getInputProps,
  isDragActive,
  open
} = useDropzone(options)

</script>

<style scoped>
.form-body{
  margin-left: 0;
  margin-right: 0;
}
.btn-back{
  display: none;
}
.card-drop-content{
  background-color: var(--bs-primary-bg-subtle);
  border-radius: var(--bs-card-border-radius);
  border: 2px dashed var(--bs-primary);
  padding: 1rem;
}

@media (min-width: 992px) {
  .form-body{
    margin-left: 3rem;
  margin-right: 3rem;

  }
}
@media (max-width: 767px) {
  .btn-back{
    display: inline-block;
  }
  .submit-section button {
    width: 50%;
    border-radius: 0;
  }
  .submit-section {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
  }
  .form-body{
    margin-left: 0;
    margin-right: 0;
  }
}
</style>