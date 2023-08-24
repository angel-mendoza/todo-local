import axios from 'axios'

const api = axios.create()

// Configurar los parámetros del interceptor
api.interceptors.request.use(
  (config) => {
    // Establecer el encabezado Content-Type
    config.headers['Content-Type'] = 'application/json'
    return config
  },
)

export default api