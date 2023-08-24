# todo-legal

Reto técnico para el puesto de Frontend Developer en TodoLegal, utilice vue como framework base, [bootstrap](https://getbootstrap.com/) para manejar los estilos, [axios](https://www.npmjs.com/package/axios) para las peticiones http, [vue3-dropzone](https://www.npmjs.com/package/vue3-dropzone) para la sección del drap and drop para cargar archivos PDF y [fontawesome](https://fontawesome.com/) para los iconos

## Configuración de proyecto

```
npm install
```

### Crear las variables de entorno

1. Crea un archivo .env
2. Copia el contenido de .env.local dentro del archivo .env
3. Sustituye el valor de la variable **VUE_APP_BASE_URL_WEBHOOK** por la url del webhook que quieras usar
4. Sustituye el valor de la variable **VUE_APP_USER** por tu nombre

### Compilación y recarga en caliente para el desarrollo

```
npm run serve
```

### Compila y minifica para producción

```
npm run build
```

### Ficheros de notas y correcciones

```
npm run lint
```

### Personalizar la configuración

See [Configuration Reference](https://cli.vuejs.org/config/).
