import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#000000', // Negro
            secondary: '#212121', // Gris Oscuro / Negro Secundario
            accent: '#FFFFFF', // Acento Blanco
            error: '#FF5252',
            warning: '#FFC107',
            info: '#2196F3',
            success: '#4CAF50',
            background: '#F9F9F9', // Fondo sutilmente claro
            surface: '#FFFFFF', // Blanco
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})